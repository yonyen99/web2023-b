<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
    ];

    public static function store($reques, $id = null)
    {
        $post = $reques->only(['name']);

        $post = self::updateOrCreate(['id' => $id], $post);

        return $post;
    }
}
