import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {
  msgConfirm = 'Confirmar'
  title = 'Essa ação não poderar se desfeita'
  constructor() { }

  ngOnInit(): void {
  }

}
