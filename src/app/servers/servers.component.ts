import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  constructor() {
    setTimeout( ()=> {
      this.allowNewServer = true
    }, 2000
    )

   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'The server was craeted!'; 
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
