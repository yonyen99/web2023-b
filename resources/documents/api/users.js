/**
 * @api {get} http://127.0.0.1:8000/api/users 1. Get all users
 * @apiName GetAllUsers
 * @apiGroup User
 *
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "data": [
        {
            "id": 1,
            "name": "yon",
            "email": "yon@gmail.com",
            "phone_number": "0986876578"
        }
    ]
}
 */

/**
 * @api {post} http://127.0.0.1:8000/api/users 2. Create a user
 * @apiName CreateUser
 * @apiGroup User
 *
 * 
 * @apiBody {String} name              input the name like "yenyon".
 * @apiBody {String} email             input the email like "yenyon@gmail.com".
 * @apiBody {String} password          input the password like "12345678".
 * @apiBody {String} number            input the number like "0986876578".
 * @apiBody {number} role_id           input the role_id like 1.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
{
    "success": true,
    "data": {
        "name": "yenyon",
        "email": "yenyon@gmail.com",
        "role_id": 1,
        "updated_at": "2023-05-19T02:04:49.000000Z",
        "created_at": "2023-05-19T02:04:49.000000Z",
        "id": 4
    }
}
 */

/**
 * @api {get} http://127.0.0.1:8000/api/users:id 3. Request User information
 * @apiName ShowUser
 * @apiGroup User
 * @apiParam {Number} id Users unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "data": {
        "id": 1,
        "name": "yon",
        "email": "yon@gmail.com",
        "phone_number": "0986876578",
        "posts": [],
        "likePosts": []
    }
}
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

/**
 * @api {put} http://127.0.0.1:8000/api/posts:id 4. Update User information
 * @apiName UpdateUser
 * @apiGroup User
 * 
 * @apiParam {Number} id User unique ID.
 * @apiBody {String} name              input the name like "yenyon2".
 * @apiBody {String} email             input the email like "yenyon2@gmail.com".
 * @apiBody {String} password          input the password like "123456782".
 * @apiBody {String} number            input the number like "09868765782".
 * @apiBody {number} role_id           input the role_id like 2.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "data": {
        "id": 4,
        "name": "yenyon2",
        "email": "yenyon2@gmail.com",
        "email_verified_at": null,
        "role_id": 1,
        "created_at": "2023-05-19T02:04:49.000000Z",
        "updated_at": "2023-05-19T03:23:26.000000Z"
    }
}
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

/**
 * @api {delete} http://127.0.0.1:8000/api/user:id 5. Delete User information
 * @apiName DeleteUser
 * @apiGroup User
 * 
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "message": "Data delete successlully!"
}
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

