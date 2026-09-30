<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreGameRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     * Any logged in user can create a new game for their collection so we always return true on the authorization 
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'status' => ['required', 'string', 'in:want_to_play,played'],
            'category' => ['required', 'string', 'max:255'],
            'rating' => ['nullable', 'numeric', 'decimal:0,1', 'min:0', 'max:10'],
        ];
    }

    protected function prepareForValidation(): void
    {
        if ($this->input('rating') === '' || $this->input('rating') === null) {
            $this->merge(['rating' => null]);
        }
    }
}
