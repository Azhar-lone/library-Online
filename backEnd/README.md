# backEnd for library-Online

[githubLink](https://github.com/Azhar-lone/library-online)

### Features
# 1-user features
### Public Routes
**1** signUp aka *createAccount*
```javascript
POST /user/signup
body=
{   email:emailString,  
    password:String, 
    confirmPassword:String,
    DOB:DateString, 
    name:String,
    }   
```
#### if status=200 ok returns{msg,userName} 
#### else returns{msg} 

**2** login 
```javascript
POST /user/login
body={ email:emailString,  
    password:String,}
```
#### if status=200 ok returns{msg,userName} 
#### else returns{msg} 
**3** getUseInfo
```javascript
GET /user/:username
where username=slugString
```
#### if status=200 ok returns{msg,user} 
#### else returns{msg} 
### Users Only Routes
**4** logout
```javascript
POST /user/logout
```
#### returns{msg} 
**5** upload profile picture

***note:*** set  content-type:multipart/formdata
```javascript
POST /user/upload/profilepic
body={
    image:imageFile
}
```
#### if status=200 ok returns{msg,user} 
#### else returns{msg}
**6** follow/unfollow user 
```javascript
POST /user/follow
body=
{   id:RecipeintId
    }

```
#### if status=200 ok returns{msg,recipient,sender} 
#### else returns{msg}
**7** chat With user

### Owners Only Routes

**8** delete userAccount

```javascript
DELETE /user/delete

```
#### returns{msg} 
**9** update userAccount

```javascript
PUT /user/update
body=
{   email?:emailString,  
    password:?String, 
    DOB?:DateString, 
    name?:String,
    }
```
#### returns{msg} 

### Admins Routes
**10** deleteMultipleUsers 
```javascript
DELETE /user/admin/deletemultiple
body={
    arrayOfUsersIds:mongoIds[]
}
```
#### returns{msg} 

**11** get All Users Info

```javascript
GET /user/admin/allusers
```
#### if status=200 ok returns{msg,user} 
#### else returns{msg}
# 2-Books features
### PUBLIC Routes
**1** get a Book

```javascript
GET /book/getbook/:id
```
**2** get all Books

```javascript
GET /book/getallbooks?page&limit
page=positive Number
limit=positive Number
```
**3** get user Books

```javascript
GET /book/getuserbooks?page&limit
page=positive Number
limit=positive Number
body{
    id:userId
}
```
**4** get featured Book

```javascript
GET /book/featured
```
**5** get following Books

```javascript
GET /book/following?page&limit
page=positive Number
limit=positive Number
```
### USERS ONLY Routes
**6** upload Book

```javascript
POST /book/upload
body={
    lots of things
}
```
**7** download Book

```javascript
GET /book/download/:id

```
**8** Like Book

```javascript
PATCH /book/like
body={
    id:bookId
}
```
### OWNERS Routes
**9** delete Book

```javascript
POST /book/delete
body={
    id:bookId
}
```
**10** update Book

```javascript
PUT /book/update
not implimented yet
```
### Admins Routes

# 3-Reviews feature
### Public Routes
**1** get all Revews of a Book
```javascript
GET /review/getall?id
id =bookId
```
**2** get top range Revews of a Book
```javascript
GET /review/gettop?id&range
id =bookId
range=positive number
```