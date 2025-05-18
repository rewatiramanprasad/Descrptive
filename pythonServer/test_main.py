from fastapi.testclient import TestClient
from main import app
import pytest

client=TestClient(app)

def test_health():
    response=client.get('/health')
    assert response.status_code==200
    print(response.json())
    assert response.json()=={"message":"Server is healthy"}

def test_analysis():
    response=client.post('/analysis',json={"url":"http://www.google666.com"})
    assert response.status_code==200
    assert response.json()=={"message":"successfully analyzes","data":{"url":"http://www.google666.com","status":'malicious'},"success":True}

@pytest.mark.parametrize(
    "input, expected_status,expected_response",[
        ({"url":"http://www.google666.com"},200,{"message":"successfully analyzes","data":{"url":"http://www.google666.com","status":'malicious'},"success":True}),
        ({"url":"http://www.google.com"},200,{"message":"successfully analyzes","data":{"url":"http://www.google.com","status":'safe'},"success":True}),
        ({"url":"http://www.666google.com"},200,{"message":"successfully analyzes","data":{"url":"http://www.666google.com","status":'malicious'},"success":True})
    ]
)
def test_analysis_multiple(input,expected_status,expected_response):
    response=client.post('/analysis',json=input)
    assert response.status_code==expected_status
    assert response.json()==expected_response