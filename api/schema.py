from sqlmodel import SQLModel, Field, Relationship

class nomineeInfo(SQLModel):
    name: str
    position: str
    Email: str
    numofVotes: int
    pfp: int

class nomineeOut(nomineeInfo):
    id: int

class nominee(nomineeInfo, table=True):
    id: int | None = Field(default=None, primary_key=True)
    nominationReason: "nominationReason" = Relationship(back_populates="nominee")


class reasonInput(SQLModel):
    nominationReason: str
    
# class reasonOut(reasonInput):
#     id: int

class nominationReason(reasonInput, table=True):
    n_id: int = Field(foreign_key="nominee.id", primary_key=True)
    nominee: "nominee" = Relationship(back_populates="nominationReason")