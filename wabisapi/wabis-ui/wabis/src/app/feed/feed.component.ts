import { EmpresaService } from './../service/empresa.service';
import { PostagemService } from './../service/postagem.service';
import { Postagem } from './../model/Postagem';
import { Component, OnInit } from '@angular/core';
import { Empresa } from '../model/Empresa';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  key = 'data'
  reverse = true

  postagem: Postagem = new Postagem ()
  listaPostagens: Postagem []

  empresa: Empresa = new Empresa()
  listaEmpresas: Empresa []
  idEmpresa: number


  constructor(
    private postagemService: PostagemService,
    private EmpresaService: EmpresaService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    this.findAllPostagens()
    this.findAllEmpresas()
  }

  findAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }
  
  publicar(){
    this.empresa.id = this.idEmpresa
    this.postagem.empresa = this.empresa

    if (this.postagem.titulo == null || this.postagem.texto == null || this.postagem.empresa == null) {
      alert('Preencha todos os campos antes de publicar!')
    } else {
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
        this.postagem = resp
        this.postagem = new Postagem()
        alert('Postagem realizada com sucesso!')
        this.findAllPostagens()
      })
    }
  }

  findAllEmpresas(){
    this.EmpresaService.getAllEmpresa().subscribe((resp: Empresa[]) =>{
      this.listaEmpresas = resp
    })
  }

  findByIdEmpresa(){
    this.EmpresaService.getByIdEmpresa(this.idEmpresa).subscribe((resp: Empresa) =>{
      this.empresa = resp
    })
  }


}
