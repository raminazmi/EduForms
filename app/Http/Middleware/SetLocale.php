<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Symfony\Component\HttpFoundation\Response;

class SetLocale
{
    public function handle(Request $request, Closure $next): Response
    {
        $locale = $request->get('locale', session('locale', config('app.locale')));
        
        if (in_array($locale, config('app.supported_locales'))) {
            App::setLocale($locale);
            session(['locale' => $locale]);
            
            if ($request->user()) {
                $request->user()->update(['locale' => $locale]);
            }
        }

        return $next($request);
    }
}