<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Auth;

class Post extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'user_id'
    ];

    public static function store($reques, $id = null)
    {
        $post = $reques->only(['title', 'description']);

        $post['user_id']= Auth::user()->id;
        
        $post = self::updateOrCreate(['id' => $id], $post);


        return $post;
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    
    public function likeBy()
    {
        return $this->belongsToMany(User::class, 'post_users');
    }
    
}
