#!/bin/bash

# AAStar Website Local Run Script

show_help() {
    echo "Usage: ./start.sh [command]"
    echo ""
    echo "Commands:"
    echo "  dev      Start development server (HMR)"
    echo "  build    Build the static production files"
    echo "  preview  Preview the production build locally"
    echo "  help     Show this help message"
}

case "$1" in
    dev)
        echo "Starting development server..."
        pnpm dev
        ;;
    build)
        echo "Building static files..."
        pnpm build
        ;;
    preview)
        echo "Starting local preview of production build..."
        pnpm preview
        ;;
    *)
        if [ -z "$1" ]; then
            echo "No command specified, starting development server by default..."
            pnpm dev
        else
            show_help
        fi
        ;;
esac
