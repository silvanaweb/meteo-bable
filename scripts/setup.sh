#!/usr/bin/env bash

# used to switch enviroments

set -eu
set -o pipefail
readonly PROGDIR=$( dirname "$( readlink -f "${0}")" )


readonly ENV=${1:-UNDEFINED${RANDOM}}
readonly -a known_environments=( $( ls .env.* | sed 's/^\.env\.//' ) )

if ! printf '%s\n' "${known_environments[@]}" | grep -q -xF "${ENV}"; then
    printf "\n\nYou need to specify the enviroment: ${known_environments[*]}\n\n"
    exit 1
fi

# Set up environment

env_source=".env.${ENV}"
cp "${env_source}" .env
