import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserService } from "../services/users.service";

export function loginGuard(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const router = inject(Router);
    const userService = inject(UserService);
    
    return userService.getCurrentUser().pipe(
        map(user => {
            if (user) {
                // User is logged in, redirect to dashboard
                return router.parseUrl('/dashboard/landing');
            }
            
            // User is not logged in, allow access to login/register
            return true;
        })
    );
}
