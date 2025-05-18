from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import re
from urllib.parse import urlparse

app=FastAPI()

class Url(BaseModel):
    url: str

@app.get('/health')
def getHealth():
    return {"message":"Server is healthy"}



def check_url_or_ip(input_str):
    
    ip_pattern = re.compile(r"^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}$")

    if ip_pattern.match(input_str):
        return "malicious" if "666" in input_str else "safe"
    else:
        try:
            parsed_url = urlparse(input_str)
            if parsed_url.scheme and parsed_url.netloc:
                return "malicious" if "666" in input_str else "safe"
            else:
                return "Invalid URL or IP address"
        except Exception:
            return "Invalid URL or IP address"
        

@app.post('/analysis')
def analysis(url: Url):
    try:
        userInput=url.url
    
        result =check_url_or_ip(userInput)
        return {"message":"successfully analyzes","data":{"url":userInput,"status":result},"success":True}
    except Exception:
        return{"message":Exception or "something went wrong","data":{},"success":False}