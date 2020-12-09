import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Empresa } from '../model/Empresa';
import { EmpresaService } from '../service/empresa.service';

@Component({
  selector: 'app-post-Empresa',
  templateUrl: './post-Empresa.component.html',
  styleUrls: ['./post-Empresa.component.css']
})
export class PostEmpresaComponent implements OnInit {

  empresa: Empresa = new Empresa()
  listaEmpresas: Empresa[]

  constructor(
    private empresaService: EmpresaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.findAllEmpresas()
  }

  findAllEmpresas() {
    this.empresaService.getAllEmpresa().subscribe((resp: Empresa[]) => {
      this.listaEmpresas = resp
    })
  }

 findByIdEmpresa() {
   this.empresaService.getByIdEmpresa(this.empresa.id).subscribe((resp: Empresa) => {
     this.empresa = resp;
   })
 }

 cadastrar(){
   if (this.empresa.nome == null) {
    alert('Preencha o campo de nome da empresa corretamente')
   } else {
    this.empresaService.postEmpresa(this.empresa).subscribe((resp: Empresa) => {
      this.empresa = resp
      this.router.navigate(['/feed'])
      alert('Empresa cadastrada com sucesso!')
    })
   }
 }
}