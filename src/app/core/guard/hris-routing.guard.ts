import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Router, UrlTree } from "@angular/router";


export function hrisDashboardGuard(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const router = inject(Router);
    const userJson = localStorage.getItem('user');
    if (userJson) {
        // Optionally, you can parse and use the user object:
        // const user = JSON.parse(userJson);
        return true;
    }
    // Redirect to /user if not authenticated
    return router.parseUrl('/user/login');
}