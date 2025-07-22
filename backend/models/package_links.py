from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid

class PackageLinks(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    basic: str = Field(default="#basic-package")
    orta: str = Field(default="#orta-package")
    luks: str = Field(default="#luks-package")
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

class PackageLinksCreate(BaseModel):
    basic: Optional[str] = None
    orta: Optional[str] = None
    luks: Optional[str] = None

class PackageLinksUpdate(BaseModel):
    basic: Optional[str] = None
    orta: Optional[str] = None
    luks: Optional[str] = None