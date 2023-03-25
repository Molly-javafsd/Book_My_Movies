package com.example.demo.repo;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.model.MovieTicket;

@Repository
public interface MovieTicketRepository extends JpaRepository<MovieTicket, Integer> {
	@Query("FROM MovieTicket m WHERE m.movieName=?1")
	public MovieTicket findyByMoviename(String movieName);
	@Query("FROM MovieTicket m WHERE m.id=?1")
	public MovieTicket findyByMovieID(int id);
	
	@Query("FROM MovieTicket m WHERE m.genre=?1")
	public List<MovieTicket> getMoviesByGenre(String genre);
	
}