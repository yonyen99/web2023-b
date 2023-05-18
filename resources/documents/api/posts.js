/**
 * @api {get} http://127.0.0.1:8000/api/posts 1. Get all posts
 * @apiName GetAllPosts
 * @apiGroup Post
 *
 * @apiHeader {String} Authorization   Access token from user login.
 * 
 *
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 {
    "success": true,
    "data": 2
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
 *
 * @apiSuccessExample  Response (example):
 HTTP/1.1 200 Success Request
 {
    "success": true,
    "data": 2
 }
 */
