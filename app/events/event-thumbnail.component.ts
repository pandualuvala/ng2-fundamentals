import { Component } from '@angular/core'
import {Input, Output, EventEmitter } from '@angular/core'
@Component({
   selector: 'event-thumbnail',
   template: ` 
    <h2> {{event.name}}</h2>
   <div> 
          Date : {{event.date}}
    <div>
    <div> 
           amount : \${{event.price}}
    </div>
       <div>
           <span> Location : {{event.location.address}}</span>
           <span>&nbsp;</span>
           <span>{{event.location.city}}, {{event.location.Country}}</span>
         </div>
       `,
})
export class EventThumbnailComponent{
 @Input() event : any
}