<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Http\Requests\StoreGameRequest;
use Illuminate\Http\RedirectResponse;

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
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
