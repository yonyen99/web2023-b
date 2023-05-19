<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Resources\PostResource;
use App\Http\Resources\ShowPostResource;
use App\Models\Post;
use App\Models\PostUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        if (Auth::user()->role->name === 'admin' || Auth::user()->role->name === 'customer') {
            $post = Post::all();
            $title = request('title');
            $post = Post::where('title', 'like', '%' . $title . '%')->get();
            $post = PostResource::collection($post);
            return response()->json(['success' => true, 'data' => $post], 200);
        }else{
            return response()->json(['message' => 'No Permission to get posts'], 403);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePostRequest $request)
    {
        
        if (Auth::user()->role->name !== 'admin') {
            return response()->json(['message' => 'No Permission to create post'], 403);
        }
        
        $post = Post::store($request);

        return response()->json(['success' => true, 'data' => $post], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Post::find($id);
        $post = new ShowPostResource($post);
        return response()->json(['success' => true, 'data' => $post], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StorePostRequest $request, $id)
    {

        $post = Post::store($request, $id);

        return response()->json(['success' => true, 'data' => $post], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::find($id);
        $post->delete();
        return response()->json(['success' => true, 'message' => 'Data delete successlully!'], 200);
    }

    public function likePost(Request $request)
    {

        $likePost = PostUser::create([
            'like' => request('like'),
            'user_id' => request('user_id'),
            'post_id' => request('post_id'),
        ]);

        return response()->json(['success' => true, 'data' => $likePost], 201);
    }
}
