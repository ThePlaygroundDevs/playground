---
name: User Story
about: Write a user story for this project
title: ''
labels: ''
assignees: ''

---

### User Story
As an { } user, I want to { } ,so that { }

### Acceptance Criteria
1. Given { }, when { }, then { }
 
### API Contract
####  METHOD /url/to/endpoint/)
{Description}
- **Query Params**
```
param=value
```
- **Headers** 
`Content-Type : application/json` 
- **Data Params**
  ```
  {
   <Key> : <Value>
  }
  ``` 
- **Success response**
    -  **Status code** : 2xx
       {Description}
       **Content** : `{ }`
- **Error responses**
    - **Status code** : 4xx
       {Description}
       **Content** :`{"details" : {<Parameter> : <Error message>,...}}`
    - **Status code** : 500 Server Error
      An error was encountered on the server
