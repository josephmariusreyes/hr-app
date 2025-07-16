import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Router, UrlTree } from "@angular/router";


export function hrisDashboardGuard(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const router = inject(Router);

    return false;
}