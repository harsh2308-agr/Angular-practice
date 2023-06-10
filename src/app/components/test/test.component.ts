import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  public myId="testId";
  public isDisabled=true;
  public successClass="text-success";
  public hasError=true;
  public isSpecial=true;
  public highLightColor = "orange";
  public greeting="";
  public name="";
  public displayName=true;
  public messageClass = {
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }

  public titleStyles = {
    color:"blue",
    fontStyle:"italic"
  }

  onClick(event: any){
    console.log(event);
     this.greeting="Hello World"
  }

  logMessage(value:any){
    console.log(value);
  }

  public color="red";
  public colors=["red","blue","green","yellow"];
  @Input() parentData="";
  // @Input('parentData') Newname="";

  @Output() public childEvent=new EventEmitter(); 
  constructor(){}
  ngOnInit(){}

  fireEvent(){
    this.childEvent.emit('Hey Angular');
  }

}
