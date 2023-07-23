firebase init --debug

Certificate issue:
set NODE_TLS_REJECT_UNAUTHORIZED=0
npm config set strict-ssl=false




rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}


Rerouting single app
Yes
{

  "hosting": {
    "public": "pubic",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "cleanUrls": true
  }
}

No
"rewrites": [
  {
    "function": "angularUniversalFunction",
    "source": "**"
  }
]
