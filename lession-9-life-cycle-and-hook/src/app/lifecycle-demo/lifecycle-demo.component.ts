import { Component, Input, OnChanges, OnInit, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
selector: 'app-lifecycle-demo',
template: `<p>Lifecycle Demo: {{ message }}</p>`,
})
export class LifecycleDemoComponent 
implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, 
      AfterViewInit, AfterViewChecked, OnDestroy {

@Input() message: string = '';

constructor() {
console.log('Constructor: Component is being created');
}

ngOnChanges() {
console.log('ngOnChanges: Input property changed');
}

ngOnInit() {
console.log('ngOnInit: Component initialized');
}

ngDoCheck() {
console.log('ngDoCheck: Change detection running');
}

ngAfterContentInit() {
console.log('ngAfterContentInit: ng-content projected');
}

ngAfterContentChecked() {
console.log('ngAfterContentChecked: ng-content checked');
}

ngAfterViewInit() {
console.log('ngAfterViewInit: View initialized');
}

ngAfterViewChecked() {
console.log('ngAfterViewChecked: View checked');
}

ngOnDestroy() {
console.log('ngOnDestroy: Component is about to be destroyed');
}
}
