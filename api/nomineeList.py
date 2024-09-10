import uvicorn

from fastapi import FastAPI, HTTPException, Depends
from sqlmodel import create_engine, SQLModel, Session, select

from schema import nomineeInfo, nomineeOut, nominee, nominationReason, reasonInput

from fastapi.middleware.cors import CORSMiddleware



app = FastAPI(title="Voting Proj.")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # URL of your React app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

engine = create_engine(
    "sqlite:///voting.db",
    connect_args={"check_same_thread": False}, 
    echo=True
)

@app.on_event("startup")
def on_startup():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session

@app.get("/api/nominees")
def get_nominees(session: Session = Depends(get_session)) -> list:
    query = select(nominee)
    return session.exec(query).all()

@app.get("/api/nominee/{id}", response_model=nomineeOut)
def nominee_by_id(id: int, session: Session = Depends(get_session)) -> nominee:
    nominee = session.get(nominee, id)
    if nominee:
        return nominee
    else:
        raise HTTPException(status_code=404, detail=f"No nominee with id={id}.")


@app.post("/api/nominees/", response_model=nominee)
def add_nominee(nominee_input: nomineeInfo, session: Session = Depends(get_session)) -> nominee:
    new_nominee = nominee.from_orm(nomineeInfo)
    session.add(new_nominee)
    session.commit()
    session.refresh(new_nominee)
    return new_nominee


@app.delete("/api/nominee/{id}", status_code=204)
def remove_nominee(id: int, session: Session = Depends(get_session)) -> None:
    nominee = session.get(nominee, id)
    if nominee:
        session.delete(nominee)
        session.commit()
    else:
        raise HTTPException(status_code=404, detail=f"No nominee with id={id}.")


@app.put("/api/nominee/{id}", response_model=nominee)
def change_nominee(id: int, new_data: nomineeInfo,
               session: Session = Depends(get_session)) -> nominee:
    nominee = session.get(nominee, id)
    if nominee:
        nominee.name = new_data.name
        nominee.position = new_data.position
        nominee.Email = new_data.Email
        nominee.numofVotes = new_data.numofVotes
        nominee.pfp = new_data.pfp
        session.commit()
        return nominee
    else:
        raise HTTPException(status_code=404, detail=f"No nominee with id={id}.")
    
@app.post("/api/nominees/info", response_model=nominationReason)
def add_reason(id: int, reason_input: reasonInput,
             session: Session = Depends(get_session)) -> nominationReason:
    nominee = session.get(nominee, id)
    if nominee:
        new_reason = nominationReason.from_orm(reason_input, update={'id': id})
        nominee.nominationreason = new_reason
        session.commit()
        session.refresh(new_reason)
        return new_reason
    else:
        raise HTTPException(status_code=404, detail=f"No nominee with id={id}.")

if __name__ == "__main__":
    uvicorn.run("nomineeList:app", reload=True)