<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Http\Requests\StoreGameRequest;
use Illuminate\Http\RedirectResponse;
use App\Models\Game;
use App\Http\Requests\UpdateGameRequest;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        //
        $games = $request->user()->games()->latest()->get();

        return Inertia::render('games/index', [
            'games' => $games,
        ]);
    
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        // renders the page with the form so we can add/create a new game for the users library
        return Inertia::render('games/create');
    }

    /**
     * Store a newly created resource in storage.
     * the store(StoreGameRequest $request) checks that the form filled in to add the game to collection has all fields filled out with correct conditions set in StoreGameRequest
     */
    public function store(StoreGameRequest $request): RedirectResponse
    {
        // this takes the current user, insert into games with this user_id, creates new row and validated make sure it only passes data that passed validation rules
        $request->user()->games()->create($request->validated());

        // this then redirects the user to the game index which is where all this users games are
        return redirect()->route('games.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     * Game $game loads the game whose id is in the url
     */
    public function edit(Game $game): Response
    {
        // if user is authorized it runs GamePolicy::update to edit game
        $this->authorize('update', $game);

        // inertia uses react to get current title, status etc to pre-fill form
        return Inertia::render('games/edit', [
            'game' => $game,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGameRequest $request, Game $game): RedirectResponse
    {
        $this->authorize('update', $game);

        // update row with only allowed fields
        $game->update($request->validated());

        return redirect()->route('games.index');
    }

    /**
     * Remove the specified resource from storage.
     * Game $game, laravel reads the id in the url, loads the game row in the database and passes it as $game. if the id doesnt match an exisiting one in the database its throws a 404
     */
    public function destroy(Game $game): RedirectResponse
    {
        // authorization to only allow someone to delete if their user matches the id of the user in the database(person that created this game)
        $this->authorize('delete', $game);

        // runs sql to delete game from the database
        $game->delete();

        // redirects back to this users collection of games index
        return redirect()->route('games.index');
    }
}
