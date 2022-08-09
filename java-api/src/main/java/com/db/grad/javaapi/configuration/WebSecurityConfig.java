package com.db.grad.javaapi.configuration;



import java.util.Arrays;

import org.springframework.context.annotation.Bean; 
import org.springframework.context.annotation.Configuration; 
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder; 
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity; 
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter; 
import org.springframework.security.core.userdetails.UserDetailsService; 
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.db.grad.javaapi.service.CustomUserDetailsService;




@SuppressWarnings("deprecation")
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{

	/* @Autowired private DataSource dataSource; */
	
	 @Override
	    protected void configure(HttpSecurity http) throws Exception{
	        http.cors().and().csrf().disable();
	        http.authorizeRequests().antMatchers("/dashboard").authenticated()
			.anyRequest().permitAll() .and() .formLogin() .loginPage("/login")
			.usernameParameter("email") .defaultSuccessUrl("/dashboard") .permitAll()
			.and().logout().logoutSuccessUrl("/logout").permitAll();
	    }

	    @Bean
	    CorsConfigurationSource corsConfigurationSource() {
	        CorsConfiguration configuration = new CorsConfiguration();
	        configuration.setAllowedOrigins(Arrays.asList("*"));
	        configuration.setAllowedMethods(Arrays.asList("*"));
	        configuration.setAllowedHeaders(Arrays.asList("*"));
	        configuration.setAllowCredentials(true);
	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	        source.registerCorsConfiguration("/**", configuration);
	        return source;
	    }

	@Bean 
	public UserDetailsService userDetailsService() { 
		return new CustomUserDetailsService(); 
	}
	
	@Bean 
	public BCryptPasswordEncoder passwordEncoder() { 
		return new BCryptPasswordEncoder(); 
	}
	
	@Bean 
	public DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
		authProvider.setUserDetailsService(userDetailsService());
		authProvider.setPasswordEncoder(passwordEncoder()); 
		return authProvider; 
	}
	
	@Override 
	protected void configure(AuthenticationManagerBuilder auth) throws
	Exception { auth.authenticationProvider(authenticationProvider());
	
			/*
			 * auth.inMemoryAuthentication()
			 * .withUser("user").password("{noop}password").roles("USER");
			 */
	
	
	}
<<<<<<< HEAD
	
//	@Override protected void configure(HttpSecurity http) throws Exception {
//		http.authorizeRequests().antMatchers("/dashboard").authenticated()
//			.anyRequest().permitAll() .and() .formLogin() .loginPage("/login")
//			.usernameParameter("email") .defaultSuccessUrl("/dashboard") .permitAll()
//			.and().logout().logoutSuccessUrl("/logout").permitAll();
//	} 
=======
	@Override
    protected void configure(HttpSecurity http) throws Exception{
		 http.authorizeRequests()
         .antMatchers("/").permitAll()
         .antMatchers("/h2-console/**").permitAll();
		
		 http.csrf().disable();
		 http.headers().frameOptions().disable();
		http.authorizeRequests().antMatchers("/dashboard").authenticated()
		.anyRequest().permitAll() .and() .formLogin() .loginPage("/login")
		.usernameParameter("email") .defaultSuccessUrl("/dashboard") .permitAll()
		.and().logout().logoutSuccessUrl("/logout").permitAll();
    }
>>>>>>> 4af7f9a07a65abd8b96d62316177f6ed0bf70cbb
	
}
