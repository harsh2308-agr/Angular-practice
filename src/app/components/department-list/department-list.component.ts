import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {
    departments = [
      { "id": 1, "name": "Angular"},
      { "id": 2, "name": "Node"},
      { "id": 3, "name": "MongoDB"},
      { "id": 4, "name": "Ruby"},
      { "id": 5, "name": "Bootstrap"}
    ]
 constructor( private router: Router,
      private route: ActivatedRoute){};
      public selectedId!: number;
      ngOnInit() {
        // let id=parseInt(this.route.snapshot.paramMap.get('id')!);
        //this.departmentId=id;
        this.route.paramMap.subscribe((params: ParamMap) => {
          let id = parseInt(params.get('id')!);
          this.selectedId=id;
        })
      }


    onSelect(department:any){
     // this.router.navigate(['/departments',department.id]);
      this.router.navigate([department.id], {relativeTo: this.route})
    
    }

    isSelected(department:any){
        return department.id===this.selectedId;
    }
}
