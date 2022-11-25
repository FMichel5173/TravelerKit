const sentencesData = [
  {
    id: 1,
    sentence: "Bonjour",
    context: "basic",
  },
  {
    id: 2,
    sentence: "Au revoir",
    context: "basic",
  },
  {
    id: 3,
    sentence: "S'il vous plaît",
    context: "basic",
  },
  {
    id: 4,
    sentence: "Merci",
    context: "basic",
  },
  {
    id: 5,
    sentence: "Parlez vous anglais?",
    context: "basic",
  },
  {
    id: 6,
    sentence: "Pourriez vous répéter cela s’il vous plait ?",
    context: "basic",
  },
  {
    id: 7,
    sentence: "Désolé je ne suis pas sûr d'avoir compris.",
    context: "basic",
  },
  {
    id: 8,
    sentence: "Je suis désolé mais vous parlez trop vite.",
    context: "basic",
  },
  {
    id: 9,
    sentence: "Quel est le mot pour dire '.....'?",
    context: "basic",
  },
  {
    id: 10,
    sentence:
      "Excusez moi monsieur /madame, pourriez vous me dire quelle est la porte d’embarquement pour le vol numéro '.....', s’il vous plait ?",
    context: "airport",
  },
  {
    id: 11,
    sentence:
      "Excusez moi Monsieur / madame, mon vol a été annulé et je ne sais pas quoi faire.",
    context: "airport",
  },
  {
    id: 12,
    sentence: "Pourrais je vous demander quelque chose ?",
    context: "airport",
  },
  {
    id: 13,
    sentence:
      "Mon avion est en retard et j’ai peur de manquer mon deuxième vol.",
    context: "airport",
  },
  {
    id: 14,
    sentence: "Mes bagages ont été perdu. Que dois je faire ?",
    context: "airport",
  },
  {
    id: 15,
    sentence:
      "Où y-a-t-il un distributeur de billet / une banque / un bureau de change ?",
    context: "airport",
  },
  {
    id: 16,
    sentence: "J’ai perdu ma carte d’embarquement.",
    context: "airport",
  },
  {
    id: 17,
    sentence: "Quelqu’un a volé mon téléphone.",
    context: "airport",
  },
  {
    id: 18,
    sentence: "Y-at-il des toilettes dans le coin.",
    context: "airport",
  },
  {
    id: 19,
    sentence: "J’ai une correspondance.",
    context: "airport",
  },
  {
    id: 20,
    sentence: "Je voyage pour le plaisir / le travail.",
    context: "airport",
  },
  {
    id: 21,
    sentence: "Je serai là pendant ___ jours.",
    context: "airport",
  },
  {
    id: 22,
    sentence: "Est ce que c’est gratuit / payant ?",
    context: "plane",
  },
  {
    id: 23,
    sentence: "Je voudrais du coca light s’il vous plait ?",
    context: "plane",
  },
  {
    id: 24,
    sentence: "Combien cela coûte ?",
    context: "plane",
  },
  {
    id: 25,
    sentence: "Est ce que je peux payer en espèce / par carte ?",
    context: "plane",
  },
  {
    id: 26,
    sentence: "Est ce que le repas est compris?)",
    context: "plane",
  },
  {
    id: 27,
    sentence: "Puis avoir quelque chose à boire / manger ?",
    context: "plane",
  },
  {
    id: 28,
    sentence: "Où est l’arrêt de bus / la gare ?",
    context: "arrived",
  },
  {
    id: 29,
    sentence: "Avez vous une carte de la ville ?",
    context: "arrived",
  },
  {
    id: 30,
    sentence: "Où puis je trouver un taxi ?",
    context: "arrived",
  },
  {
    id: 31,
    sentence: "J’aimerais aller à ______",
    context: "arrived",
  },
  {
    id: 32,
    sentence: "Savez vous où est cet hotel ?",
    context: "arrived",
  },
  {
    id: 33,
    sentence: "J’ai une réservation au nom de _______",
    context: "hotel",
  },
  {
    id: 34,
    sentence: "Je voudrais une chambre simple/ double.",
    context: "hotel",
  },
  {
    id: 35,
    sentence: "Nous voudrions deux lits doubles, s’il vous plait.",
    context: "hotel",
  },
  {
    id: 36,
    sentence: "Est ce que la chambre a une salle de bain ?",
    context: "hotel",
  },
  {
    id: 37,
    sentence: "Quel est le mot de passe du wifi ?",
    context: "hotel",
  },
  {
    id: 38,
    sentence: "Quel est le mot de passe du wifi ?",
    context: "hotel",
  },
  {
    id: 39,
    sentence: " ______ est en panne / cassé.",
    context: "hotel",
  },
  {
    id: 40,
    sentence: "La clim ne fonctionne pas.",
    context: "hotel",
  },
  {
    id: 41,
    sentence: "Les oreillers manquent / il n’y en a pas.",
    context: "hotel",
  },
  {
    id: 42,
    sentence: "Je voudrais une couverture supplémentaire s’il vous plait.",
    context: "hotel",
  },
  {
    id: 43,
    sentence: "Pourrais je avoir un autre ______, s’il vous plait ?",
    context: "hotel",
  },
  {
    id: 44,
    sentence: "A quel étage se trouve la chambre ?",
    context: "hotel",
  },
  {
    id: 45,
    sentence: "Où est l’ascenseur ?",
    context: "hotel",
  },
  {
    id: 46,
    sentence: "Comment est ce que je me connecte à internet ?",
    context: "hotel",
  },
  {
    id: 47,
    sentence: "Est ce que le petit déjeuner est compris ?",
    context: "hotel",
  },
  {
    id: 48,
    sentence: "Il faut remettre des serviettes dans ma chambre",
    context: "hotel",
  },
  {
    id: 49,
    sentence: "Où est ce que je peux trouver un supermarché ?",
    context: "city",
  },
  {
    id: 50,
    sentence: "Où est l’hopital ?",
    context: "city",
  },
  {
    id: 51,
    sentence: "Où puis je trouver un restaurant (pas cher) ?",
    context: "city",
  },
  {
    id: 52,
    sentence: "Comment est ce qu’on peut aller à _____ ?",
    context: "city",
  },
  {
    id: 53,
    sentence: "Comment puis je aller à ________ ?",
    context: "city",
  },
  {
    id: 54,
    sentence: "Est ce que ________ est loin d’ici ?",
    context: "city",
  },
  {
    id: 55,
    sentence: "Est ce que _______ est proche d’ici ?",
    context: "city",
  },
  {
    id: 56,
    sentence: "Bonjour, une table pour deux s’il vous plait.",
    context: "restaurant",
  },
  {
    id: 57,
    sentence: "Je voudrais boire.",
    context: "restaurant",
  },
  {
    id: 58,
    sentence: "Pourrais je voir le menu ?",
    context: "restaurant",
  },
  {
    id: 59,
    sentence: "je voudrais commander ____.",
    context: "restaurant",
  },
  {
    id: 60,
    sentence: "je vais prendre une soupe.",
    context: "restaurant",
  },
  {
    id: 61,
    sentence: "Je vais prendre une entrée / un dessert.",
    context: "restaurant",
  },
  {
    id: 62,
    sentence: "Pourrais je avoir l’addition, s’il vous plait ?",
    context: "restaurant",
  },
  {
    id: 63,
    sentence: "Gardez la monnaie.",
    context: "restaurant",
  },
  {
    id: 64,
    sentence: "Merci, c’était excellent, délicieux / très bon.",
    context: "restaurant",
  },
  {
    id: 65,
    sentence: "Combien ça coûte ?",
    context: "store",
  },
  {
    id: 66,
    sentence: "Est ce que je peux payer en espèce ?",
    context: "store",
  },
  {
    id: 67,
    sentence: "Est ce que vous acceptez les euros ?",
    context: "store",
  },
  {
    id: 68,
    sentence: "Je voudrais acheter _____.",
    context: "store",
  },
  {
    id: 69,
    sentence: "Je cherche ______.",
    context: "store",
  },
  {
    id: 70,
    sentence: "C’est trop grand / petit.",
    context: "store",
  },
  {
    id: 71,
    sentence: "C’est trop cher / vraiment pas cher",
    context: "store",
  },
  {
    id: 72,
    sentence: "L’avez vous dans une autre taille / couleur ?",
    context: "store",
  },
];

export default sentencesData;
