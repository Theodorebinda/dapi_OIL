#!/bin/bash

# Configuration
REPO_PATH="/chemin/vers/votre/repo"  # À MODIFIER
cd "$REPO_PATH" || exit

# Période : 19 avril au 9 juin 2026
START_DATE="2026-04-19"
END_DATE="2026-06-09"

# Nombre minimum de commits par jour
MIN_COMMITS_PER_DAY=10

# Nombre maximum de commits par jour (pour varier un peu)
MAX_COMMITS_PER_DAY=15

# Convertir les dates en timestamp
start_ts=$(date -j -f "%Y-%m-%d" "$START_DATE" "+%s" 2>/dev/null || date -d "$START_DATE" "+%s")
end_ts=$(date -j -f "%Y-%m-%d" "$END_DATE" "+%s" 2>/dev/null || date -d "$END_DATE" "+%s")

# Boucle sur chaque jour
current_ts=$start_ts
while [ $current_ts -le $end_ts ]; do
    # Date du jour au format YYYY-MM-DD
    if date -j -f "%s" "$current_ts" "+%Y-%m-%d" 2>/dev/null; then
        current_date=$(date -j -f "%s" "$current_ts" "+%Y-%m-%d")
    else
        current_date=$(date -d "@$current_ts" "+%Y-%m-%d")
    fi
    
    # Générer un nombre aléatoire de commits entre MIN et MAX
    commits_today=$((MIN_COMMITS_PER_DAY + RANDOM % (MAX_COMMITS_PER_DAY - MIN_COMMITS_PER_DAY + 1)))
    
    echo "📅 $current_date : $commits_today commits"
    
    # Générer les commits pour cette journée
    for i in $(seq 1 $commits_today); do
        # Heure aléatoire entre 8h et 20h
        random_hour=$((8 + RANDOM % 12))
        random_minute=$((RANDOM % 60))
        random_second=$((RANDOM % 60))
        
        # Format ISO 8601 complet
        commit_datetime="${current_date}T${random_hour}:${random_minute}:${random_second}"
        
        # Créer un fichier pour éviter les commits vides (optionnel)
        echo "Commit $i du $current_date à $random_hour:$random_minute" >> commits_log.txt
        
        # Ajouter le fichier modifié
        git add commits_log.txt 2>/dev/null
        
        # Commit avec la date personnalisée
        GIT_COMMITTER_DATE="$commit_datetime" \
        git commit --date="$commit_datetime" \
            -m "Update: Contribution du $current_date (#$i)"
        
        # Petit délai pour éviter les collisions (optionnel)
        sleep 0.5
    done
    
    # Passer au jour suivant (ajouter 86400 secondes = 1 jour)
    current_ts=$((current_ts + 86400))
done

echo "✅ Terminé ! $(( (end_ts - start_ts) / 86400 + 1 )) jours traités."
echo "📤 N'oubliez pas de pusher : git push origin main"