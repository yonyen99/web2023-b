/**
 * @api {get} http://127.0.0.1:8000/api/posts 1. Get all posts
 * @apiName GetAllPosts
 * @apiGroup Post
 *
 * @apiHeader {String} Authorization   Access token from user login.
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "success": true,
    "data": [
        {
            "id": 1,
            "title": "Post1",
            "description": "This Post1"
        }
    ]
}
 */

/**
 * @api {post} http://127.0.0.1:8000/api/posts 2. Create a post
 * @apiName CreatePost
 * @apiGroup Post
 *
 * @apiHeader {String} Authorization   Access token from user login.
 * 
 * @apiBody {String} name              input the name like "Post1".
 * @apiBody {String} description       input the description like "This is Post1".
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "data": {
        "title": "Post1",
        "description": "This Post1",
        "user_id": 3,
        "updated_at": "2023-05-19T01:32:59.000000Z",
        "created_at": "2023-05-19T01:32:59.000000Z",
        "id": 3
    }
}
 */

/**
 * @api {get} http://127.0.0.1:8000/api/posts:id 3. Request Post information
 * @apiName ShowPost
 * @apiGroup Post
 * @apiHeader {String} Authorization   Access token from user login.
 * @apiParam {Number} id Posts unique ID.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "data": {
        "id": 1,
        "title": "Post1",
        "description": "This Post1",
        "created_by": {
            "id": 1,
            "name": "yon",
            "email": "yon@gmail.com",
            "email_verified_at": null,
            "role_id": 1,
            "created_at": "2023-05-17T09:49:04.000000Z",
            "updated_at": "2023-05-17T09:49:04.000000Z"
        },
        "likeBy": []
    }
}
 *
 * @apiError PostNotFound The id of the Post was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PostNotFound"
 *     }
 */

/**
 * @api {put} http://127.0.0.1:8000/api/posts:id 4. Update Post information
 * @apiName UpdatePost
 * @apiGroup Post
 * 
 * @apiHeader {String} Authorization   Access token from user login.
 * @apiParam {Number} id Posts unique ID.
 * @apiBody {String} name              input the name like "Post1 Update".
 * @apiBody {String} description       input the description like "This is Post1 Upate".
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "data": {
        "id": 1,
        "title": "Post1 Update",
        "description": "This is Post1 Upate",
        "user_id": 3,
        "created_at": "2023-05-17T09:53:28.000000Z",
        "updated_at": "2023-05-19T01:49:46.000000Z"
    }
}
 *
 * @apiError PostNotFound The id of the Post was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PostNotFound"
 *     }
 */

/**
 * @api {delete} http://127.0.0.1:8000/api/posts:id 5. Delete Post information
 * @apiName DeletePost
 * @apiGroup Post
 * 
 * @apiHeader {String} Authorization   Access token from user login.
 * @apiParam {Number} id Posts unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "message": "Data delete successlully!"
}
 *
 * @apiError PostNotFound The id of the Post was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PostNotFound"
 *     }
 */