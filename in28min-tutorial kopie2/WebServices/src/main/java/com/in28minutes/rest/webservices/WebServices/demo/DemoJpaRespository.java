/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.in28minutes.rest.webservices.WebServices.demo;

import com.in28minutes.rest.webservices.WebServices.demo.Demo;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface DemoJpaRespository extends JpaRepository<Demo, Long>{
    List<Demo> findByUsername(String username);
}