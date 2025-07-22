from typing import Optional
from datetime import timedelta
from models.auth import (
    DEFAULT_ADMIN_PASSWORD_HASH, 
    verify_password, 
    create_access_token, 
    verify_token,
    ACCESS_TOKEN_EXPIRE_MINUTES
)

class AuthService:
    def __init__(self):
        self.admin_password_hash = DEFAULT_ADMIN_PASSWORD_HASH
    
    async def authenticate_admin(self, password: str) -> Optional[str]:
        """
        Authenticate admin and return access token
        Default password: kebeli123
        """
        if verify_password(password, self.admin_password_hash):
            access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
            access_token = create_access_token(
                data={"sub": "admin", "role": "admin"}, 
                expires_delta=access_token_expires
            )
            return access_token
        return None
    
    async def verify_admin_token(self, token: str) -> bool:
        """Verify admin token"""
        payload = verify_token(token)
        if payload and payload.get("sub") == "admin" and payload.get("role") == "admin":
            return True
        return False
    
    async def get_admin_info(self):
        """Get admin information"""
        return {
            "username": "admin",
            "role": "admin",
            "password_info": {
                "default_password": "kebeli123",
                "note": "Bu şifreyi güvenlik için değiştirmenizi öneririz"
            }
        }