import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, className: string,
    horizontalPosition: MatSnackBarHorizontalPosition = 'right',
    verticalPosition: MatSnackBarVerticalPosition = 'top',
    durationInSeconds = 4) {
    this.snackBar.open(message, 'x', {
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
      duration: durationInSeconds * 1000,
      panelClass: className
    });
  }
}
