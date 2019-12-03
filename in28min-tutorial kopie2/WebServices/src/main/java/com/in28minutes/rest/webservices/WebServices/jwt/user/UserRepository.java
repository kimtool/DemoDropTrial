package com.in28minutes.rest.webservices.WebServices.jwt.user;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Gebruiker
 */

public interface UserRepository extends JpaRepository<User, Long> {
}
