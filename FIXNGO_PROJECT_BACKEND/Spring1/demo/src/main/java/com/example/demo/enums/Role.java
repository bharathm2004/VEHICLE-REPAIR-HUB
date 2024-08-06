package com.example.demo.enums;

import java.util.List;
import java.util.Set;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import static java.util.stream.Collectors.toList;

@RequiredArgsConstructor
public enum Role {
        Admin(Set.of(
                        Access.ADMIN_GET,
                        Access.ADMIN_POST,
                        Access.ADMIN_PUT,
                        Access.ADMIN_DELETE,
                        Access.USER_GET,
                        Access.USER_POST,
                        Access.USER_PUT,
                        Access.USER_DELETE)),
        User(Set.of(
                        Access.USER_GET,
                        Access.USER_POST,
                        Access.USER_PUT,
                        Access.USER_DELETE));

        @Getter
        private final Set<Access> accesses;

        public List<SimpleGrantedAuthority> getAuthorities() {
                var authorities = getAccesses()
                                .stream()
                                .map(access -> new SimpleGrantedAuthority(access.getAccess()))
                                .collect(toList());
                authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
                return authorities;
        }
}
