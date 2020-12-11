import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from '../model/Empresa';
import { EmpresaService } from '../service/empresa.service';

@Component({
  selector: 'app-delete-empresa',
  templateUrl: './delete-empresa.component.html',
  styleUrls: ['./delete-empresa.component.css']
})
export class DeleteEmpresaComponent implements OnInit {
  empresa: Empresa = new Empresa()
  constructor(
    private empresaService: EmpresaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    let id: number = this.route.snapshot.params['id']
    this.findByIdEmpresa(id)
  }

  findByIdEmpresa(id: number){
    this.empresaService.getByIdEmpresa(id).subscribe((resp: Empresa) => {
      this.empresa = resp
    })
  }

  btnSim(){
    this.empresaService.deleteEmpresa(this.empresa.id).subscribe(() => {
      this.router.navigate(['/cadastro-empresa'])
      alert('empresa apagado com sucesso!!')
    })
  }

  btnNao(){
    this.router.navigate(['/cadastro-empresa'])
  }
  
}

