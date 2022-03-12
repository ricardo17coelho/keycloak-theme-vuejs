FROM quay.io/keycloak/keycloak:17.0.0
# FROM quay.io/keycloak/keycloak:latest
# FROM jboss/keycloak:12.0.4
# FROM wizzn/keycloak
# FROM quay.io/keycloak/keycloak:legacy

ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev"]
