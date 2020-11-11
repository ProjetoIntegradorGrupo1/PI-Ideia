package com.wabis.wabisapi.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.wabis.wabisapi.model.Empresa;

@Repository
public interface EmpresaRepository extends JpaRepository<Empresa, Long> {
	public List<Empresa> findAllByNomeContainingIgnoreCase (String nome);

}
