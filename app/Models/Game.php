<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


// this allows these fields to be mass assigned when create() is used. We have this to stop malicious mass assignment or people adding admin privileges etc 
#[Fillable(['user_id', 'title', 'status', 'category', 'rating'])]
class Game extends Model
{
    // casts() says: “When this attribute comes out of the database (or goes in), treat it as this PHP type.” and stores it as an array
    protected function casts(): array
    {
        // its returns the string number stored in the database to an integer
        return [
            'rating' => 'integer',
        ];
    }

    // Each game row stores user_id (a number). That number is which account owns this game.
    //
    // This method is named "user" so you can write:  $game->user
    // Laravel looks at $game->user_id, finds the matching row in "users", and gives you that person.
    //
    // Same idea as: "this save file belongs to player #3" — user_id is the #3, user() fetches player #3.
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
