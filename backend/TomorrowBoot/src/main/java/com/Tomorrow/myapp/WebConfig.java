package com.Tomorrow.myapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.Tomorrow.myapp.service.JwtInterceptor;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    private static final String[] EXCLUDE_PATHS = {
            "/member/**",
            "/cart/**",
            "/order/**",
            "/detail/**",
            "/menu/**",
            "/menudetail/**",
            "/wallet/**",
            "/pay/**",
            "/notice/**",
            "/gallery/**",
            "/question/**",
            "/answer/**",
            "/hometax/**",
            "/shipping/**"
    };

    @Autowired
    private JwtInterceptor jwtInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(jwtInterceptor)
                .addPathPatterns("/**")
                .excludePathPatterns(EXCLUDE_PATHS);
    }
    @Override
    public void addCorsMappings(CorsRegistry registry) {
      registry.addMapping("/**")
          .allowedOrigins("*")
          .allowedMethods(HttpMethod.POST.name())
          .allowCredentials(false)
          .maxAge(3600);
    }
}
