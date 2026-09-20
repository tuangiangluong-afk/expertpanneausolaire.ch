// ============================================================
// FAITS LOCAUX REELS - fichier genere, ne pas editer a la main.
// Chaque valeur est une mesure, pas une appreciation redactionnelle :
//   climat, rayonnement et vent  -> NASA POWER, climatologie 20 ans
//       (SYN1DEG/MERRA2), base janvier 2001 - decembre 2020.
//   productible photovoltaique   -> JRC PVGIS-SARAH2 / ERA5, 2005-2020,
//       inclinaison et orientation optimales, pertes systeme 14 %.
//   risques et sismicite         -> Georisques, Ministere de la Transition
//       ecologique et de la Cohesion des territoires.
// ============================================================

export interface LocalFacts {
    /** Rayonnement solaire recu par an, kWh/m2 */
    sunKwh: number | null;
    /** Temperature moyenne annuelle, degres C */
    tmean: number | null;
    /** Temperature de base hivernale (P190), degres C */
    tminJan: number | null;
    /** Precipitations annuelles, mm */
    rainMm: number | null;
    /** Degres-jours unifies base 18, chauffage */
    dju18: number | null;
    /** Direction dominante du vent (rose des vents) */
    windDir: string | null;
    /** Vitesse moyenne du vent, km/h */
    windKmh: number | null;
    /** Productible reel, kWh par kWc et par an (PVGIS) */
    pvYield?: number;
    /** Inclinaison optimale des modules, degres (PVGIS) */
    pvSlope?: number;
    /** Irradiation dans le plan optimal, kWh/m2/an (PVGIS) */
    pvSun?: number;
    /** Risques recenses dans la commune (Georisques) */
    risks?: string[];
    /** Zone de sismicite reglementaire (Georisques) */
    sismicite?: string | null;
}

export const LOCAL_FACTS_SOURCE =
    "NASA POWER (climatologie 20 ans, SYN1DEG/MERRA2) ; JRC PVGIS-SARAH2 (2005-2020) ; Georisques (Ministere de la Transition ecologique)";

export const LOCAL_FACTS: Record<string, LocalFacts> = {
    "aigle": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1278, pvSlope: 38, pvSun: 1589 },
    "aire-la-ville": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1260, pvSlope: 37, pvSun: 1602 },
    "alle": { sunKwh: 1254, tmean: 9.1, tminJan: -13.5, rainMm: 1000, dju18: 3259, windDir: "OSO", windKmh: 7.1, pvYield: 1134, pvSlope: 38, pvSun: 1422 },
    "anieres": { sunKwh: 1309, tmean: 9.0, tminJan: -18.3, rainMm: 1164, dju18: 3318, windDir: "O", windKmh: 7.6, pvYield: 1268, pvSlope: 38, pvSun: 1610 },
    "ardon": { sunKwh: 1309, tmean: 0.0, tminJan: -26.3, rainMm: 945, dju18: 6568, windDir: "O", windKmh: 5.5, pvYield: 1272, pvSlope: 40, pvSun: 1576 },
    "aubonne": { sunKwh: 1309, tmean: 9.0, tminJan: -18.3, rainMm: 1164, dju18: 3318, windDir: "O", windKmh: 7.6, pvYield: 1271, pvSlope: 37, pvSun: 1610 },
    "auvernier": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1258, pvSlope: 39, pvSun: 1563 },
    "avenches": { sunKwh: 1309, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1238, pvSlope: 38, pvSun: 1560 },
    "avully": { sunKwh: 1308, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1259, pvSlope: 37, pvSun: 1602 },
    "avusy": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1260, pvSlope: 37, pvSun: 1601 },
    "ayent": { sunKwh: 1309, tmean: 4.1, tminJan: -23.1, rainMm: 1175, dju18: 5086, windDir: "SO", windKmh: 4.0, pvYield: 1402, pvSlope: 41, pvSun: 1723 },
    "bardonnex": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1251, pvSlope: 37, pvSun: 1584 },
    "bassecourt": { sunKwh: 1240, tmean: 9.1, tminJan: -15.0, rainMm: 1310, dju18: 3289, windDir: "ONO", windKmh: 6.8, pvYield: 1126, pvSlope: 37, pvSun: 1424 },
    "bellevue": { sunKwh: 1309, tmean: 9.0, tminJan: -18.3, rainMm: 1164, dju18: 3318, windDir: "O", windKmh: 7.6, pvYield: 1281, pvSlope: 38, pvSun: 1628 },
    "bernex": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1251, pvSlope: 37, pvSun: 1590 },
    "bevaix": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1251, pvSlope: 37, pvSun: 1583 },
    "bex": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 958, pvSlope: 26, pvSun: 1226 },
    "bienne": { sunKwh: 1254, tmean: 8.6, tminJan: -17.2, rainMm: 1142, dju18: 3445, windDir: "O", windKmh: 6.4, pvYield: 1211, pvSlope: 37, pvSun: 1535 },
    "boncourt": { sunKwh: 1254, tmean: 9.1, tminJan: -13.5, rainMm: 1000, dju18: 3259, windDir: "OSO", windKmh: 7.1, pvYield: 1146, pvSlope: 37, pvSun: 1439 },
    "boudry": { sunKwh: 1309, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1188, pvSlope: 36, pvSun: 1503 },
    "bourg-en-lavaux": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1157, pvSlope: 37, pvSun: 1457 },
    "bourg-saint-pierre": { sunKwh: 1357, tmean: 0.0, tminJan: -26.3, rainMm: 945, dju18: 6568, windDir: "O", windKmh: 5.5, pvYield: 1095, pvSlope: 32, pvSun: 1340 },
    "bovernier": { sunKwh: 1309, tmean: 3.4, tminJan: -25.3, rainMm: 1146, dju18: 5346, windDir: "S", windKmh: 3.1, pvYield: 1117, pvSlope: 33, pvSun: 1368 },
    "broc": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 943, pvSlope: 23, pvSun: 1190 },
    "bulle": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1168, pvSlope: 38, pvSun: 1457 },
    "carouge": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1240, pvSlope: 37, pvSun: 1571 },
    "cartigny": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1260, pvSlope: 37, pvSun: 1601 },
    "cernier": { sunKwh: 1254, tmean: 8.9, tminJan: -14.6, rainMm: 1062, dju18: 3328, windDir: "OSO", windKmh: 6.9, pvYield: 1002, pvSlope: 31, pvSun: 1273 },
    "chalais": { sunKwh: 1309, tmean: 0.0, tminJan: -26.3, rainMm: 945, dju18: 6568, windDir: "O", windKmh: 5.5, pvYield: 1059, pvSlope: 33, pvSun: 1312 },
    "chamoson": { sunKwh: 1309, tmean: 0.0, tminJan: -26.3, rainMm: 945, dju18: 6568, windDir: "O", windKmh: 5.5, pvYield: 1298, pvSlope: 37, pvSun: 1623 },
    "champery": { sunKwh: 1309, tmean: 3.4, tminJan: -25.3, rainMm: 1146, dju18: 5346, windDir: "S", windKmh: 3.1, pvYield: 923, pvSlope: 27, pvSun: 1163 },
    "chancy": { sunKwh: 1308, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1275, pvSlope: 37, pvSun: 1621 },
    "charmey": { sunKwh: 1309, tmean: 4.1, tminJan: -23.1, rainMm: 1175, dju18: 5086, windDir: "SO", windKmh: 4.0, pvYield: 1125, pvSlope: 36, pvSun: 1401 },
    "chateau-dx": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1059, pvSlope: 31, pvSun: 1314 },
    "chatel-saint-denis": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1117, pvSlope: 35, pvSun: 1405 },
    "chavannes-pres-renens": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1229, pvSlope: 38, pvSun: 1562 },
    "chene-bougeries": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1251, pvSlope: 37, pvSun: 1584 },
    "chene-bourg": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1251, pvSlope: 37, pvSun: 1584 },
    "chermignon": { sunKwh: 1309, tmean: 4.1, tminJan: -23.1, rainMm: 1175, dju18: 5086, windDir: "SO", windKmh: 4.0, pvYield: 1125, pvSlope: 36, pvSun: 1401 },
    "chexbres": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1164, pvSlope: 38, pvSun: 1466 },
    "choulex": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1267, pvSlope: 38, pvSun: 1607 },
    "collex-bossy": { sunKwh: 1309, tmean: 9.0, tminJan: -18.3, rainMm: 1164, dju18: 3318, windDir: "O", windKmh: 7.6, pvYield: 1281, pvSlope: 38, pvSun: 1628 },
    "collombey-muraz": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1127, pvSlope: 35, pvSun: 1407 },
    "collonge-bellerive": { sunKwh: 1309, tmean: 9.0, tminJan: -18.3, rainMm: 1164, dju18: 3318, windDir: "O", windKmh: 7.6, pvYield: 1268, pvSlope: 38, pvSun: 1610 },
    "cologny": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1253, pvSlope: 37, pvSun: 1592 },
    "colombier": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1127, pvSlope: 35, pvSun: 1407 },
    "confignon": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1251, pvSlope: 37, pvSun: 1590 },
    "conthey": { sunKwh: 1309, tmean: 4.1, tminJan: -23.1, rainMm: 1175, dju18: 5086, windDir: "SO", windKmh: 4.0, pvYield: 1396, pvSlope: 40, pvSun: 1724 },
    "coppet": { sunKwh: 1309, tmean: 9.0, tminJan: -18.3, rainMm: 1164, dju18: 3318, windDir: "O", windKmh: 7.6, pvYield: 1264, pvSlope: 38, pvSun: 1607 },
    "corgemont": { sunKwh: 1254, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1111, pvSlope: 34, pvSun: 1409 },
    "corminboeuf": { sunKwh: 1309, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1203, pvSlope: 38, pvSun: 1513 },
    "corsier": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1257, pvSlope: 39, pvSun: 1578 },
    "cortaillod": { sunKwh: 1309, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1215, pvSlope: 37, pvSun: 1536 },
    "cossonay": { sunKwh: 1309, tmean: 9.0, tminJan: -18.3, rainMm: 1164, dju18: 3318, windDir: "O", windKmh: 7.6, pvYield: 1285, pvSlope: 38, pvSun: 1625 },
    "courgenay": { sunKwh: 1254, tmean: 9.1, tminJan: -13.5, rainMm: 1000, dju18: 3259, windDir: "OSO", windKmh: 7.1, pvYield: 1110, pvSlope: 36, pvSun: 1389 },
    "courtelary": { sunKwh: 1254, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1080, pvSlope: 33, pvSun: 1368 },
    "cressier": { sunKwh: 1309, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1232, pvSlope: 38, pvSun: 1543 },
    "crissier": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1287, pvSlope: 39, pvSun: 1628 },
    "dardagny": { sunKwh: 1308, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1258, pvSlope: 37, pvSun: 1601 },
    "delemont": { sunKwh: 1254, tmean: 8.9, tminJan: -14.6, rainMm: 1062, dju18: 3328, windDir: "OSO", windKmh: 6.9, pvYield: 1128, pvSlope: 38, pvSun: 1414 },
    "echallens": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1260, pvSlope: 38, pvSun: 1589 },
    "ecublens": { sunKwh: 1309, tmean: 9.0, tminJan: -18.3, rainMm: 1164, dju18: 3318, windDir: "O", windKmh: 7.6, pvYield: 1229, pvSlope: 38, pvSun: 1562 },
    "epalinges": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1268, pvSlope: 38, pvSun: 1603 },
    "estavayer-le-lac": { sunKwh: 1309, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1252, pvSlope: 38, pvSun: 1586 },
    "evionnaz": { sunKwh: 1309, tmean: 3.4, tminJan: -25.3, rainMm: 1146, dju18: 5346, windDir: "S", windKmh: 3.1, pvYield: 1089, pvSlope: 33, pvSun: 1362 },
    "finhaut": { sunKwh: 1309, tmean: 3.4, tminJan: -25.3, rainMm: 1146, dju18: 5346, windDir: "S", windKmh: 3.1, pvYield: 1155, pvSlope: 35, pvSun: 1415 },
    "fontainemelon": { sunKwh: 1309, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1163, pvSlope: 36, pvSun: 1465 },
    "fribourg": { sunKwh: 1309, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1112, pvSlope: 35, pvSun: 1401 },
    "fully": { sunKwh: 1309, tmean: 3.4, tminJan: -25.3, rainMm: 1146, dju18: 5346, windDir: "S", windKmh: 3.1, pvYield: 1401, pvSlope: 41, pvSun: 1730 },
    "geneve": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1250, pvSlope: 37, pvSun: 1590 },
    "genthod": { sunKwh: 1309, tmean: 9.0, tminJan: -18.3, rainMm: 1164, dju18: 3318, windDir: "O", windKmh: 7.6, pvYield: 1267, pvSlope: 37, pvSun: 1610 },
    "gland": { sunKwh: 1309, tmean: 9.0, tminJan: -18.3, rainMm: 1164, dju18: 3318, windDir: "O", windKmh: 7.6, pvYield: 1281, pvSlope: 37, pvSun: 1623 },
    "grandson": { sunKwh: 1309, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1222, pvSlope: 37, pvSun: 1545 },
    "grimisuat": { sunKwh: 1309, tmean: 4.1, tminJan: -23.1, rainMm: 1175, dju18: 5086, windDir: "SO", windKmh: 4.0, pvYield: 1462, pvSlope: 41, pvSun: 1796 },
    "grolley": { sunKwh: 1309, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1198, pvSlope: 37, pvSun: 1509 },
    "grone": { sunKwh: 1309, tmean: 0.0, tminJan: -26.3, rainMm: 945, dju18: 6568, windDir: "O", windKmh: 5.5, pvYield: 1128, pvSlope: 34, pvSun: 1394 },
    "gruyeres": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1076, pvSlope: 31, pvSun: 1350 },
    "hauterive": { sunKwh: 1309, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1213, pvSlope: 38, pvSun: 1518 },
    "hermance": { sunKwh: 1309, tmean: 9.0, tminJan: -18.3, rainMm: 1164, dju18: 3318, windDir: "O", windKmh: 7.6, pvYield: 1269, pvSlope: 38, pvSun: 1611 },
    "jussy": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1258, pvSlope: 37, pvSun: 1597 },
    "la-chaux-de-fonds": { sunKwh: 1254, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1121, pvSlope: 37, pvSun: 1398 },
    "la-neuveville": { sunKwh: 1254, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1210, pvSlope: 37, pvSun: 1535 },
    "la-sagne": { sunKwh: 1254, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1190, pvSlope: 36, pvSun: 1496 },
    "la-sarraz": { sunKwh: 1309, tmean: 9.0, tminJan: -18.3, rainMm: 1164, dju18: 3318, windDir: "O", windKmh: 7.6, pvYield: 1248, pvSlope: 37, pvSun: 1579 },
    "la-tour-de-peilz": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1270, pvSlope: 39, pvSun: 1592 },
    "laconnex": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1259, pvSlope: 37, pvSun: 1600 },
    "lancy": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1230, pvSlope: 36, pvSun: 1558 },
    "lausanne": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1222, pvSlope: 38, pvSun: 1549 },
    "le-grand-saconnex": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1241, pvSlope: 37, pvSun: 1579 },
    "le-landeron": { sunKwh: 1254, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1204, pvSlope: 36, pvSun: 1527 },
    "le-locle": { sunKwh: 1254, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1123, pvSlope: 37, pvSun: 1402 },
    "le-mont-sur-lausanne": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1281, pvSlope: 39, pvSun: 1618 },
    "le-noirmont": { sunKwh: 1254, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1117, pvSlope: 37, pvSun: 1393 },
    "le-sentier": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1260, pvSlope: 38, pvSun: 1589 },
    "lens": { sunKwh: 1309, tmean: 4.1, tminJan: -23.1, rainMm: 1175, dju18: 5086, windDir: "SO", windKmh: 4.0, pvYield: 1440, pvSlope: 41, pvSun: 1768 },
    "les-brenets": { sunKwh: 1309, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1218, pvSlope: 37, pvSun: 1537 },
    "les-breuleux": { sunKwh: 1254, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1127, pvSlope: 38, pvSun: 1408 },
    "liddes": { sunKwh: 1357, tmean: 0.0, tminJan: -26.3, rainMm: 945, dju18: 6568, windDir: "O", windKmh: 5.5, pvYield: 988, pvSlope: 29, pvSun: 1214 },
    "lisle": { sunKwh: 1309, tmean: 9.0, tminJan: -18.3, rainMm: 1164, dju18: 3318, windDir: "O", windKmh: 7.6, pvYield: 1263, pvSlope: 37, pvSun: 1596 },
    "lutry": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1190, pvSlope: 38, pvSun: 1498 },
    "marly": { sunKwh: 1309, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1173, pvSlope: 39, pvSun: 1461 },
    "martigny": { sunKwh: 1309, tmean: 3.4, tminJan: -25.3, rainMm: 1146, dju18: 5346, windDir: "S", windKmh: 3.1, pvYield: 1157, pvSlope: 31, pvSun: 1450 },
    "massongex": { sunKwh: 1309, tmean: 3.4, tminJan: -25.3, rainMm: 1146, dju18: 5346, windDir: "S", windKmh: 3.1, pvYield: 1165, pvSlope: 36, pvSun: 1460 },
    "matran": { sunKwh: 1309, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1213, pvSlope: 38, pvSun: 1518 },
    "meinier": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1266, pvSlope: 38, pvSun: 1607 },
    "meyrin": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1266, pvSlope: 37, pvSun: 1608 },
    "montana": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1211, pvSlope: 37, pvSun: 1525 },
    "monthey": { sunKwh: 1309, tmean: 3.4, tminJan: -25.3, rainMm: 1146, dju18: 5346, windDir: "S", windKmh: 3.1, pvYield: 1128, pvSlope: 31, pvSun: 1420 },
    "montreux": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1253, pvSlope: 38, pvSun: 1566 },
    "morges": { sunKwh: 1309, tmean: 9.0, tminJan: -18.3, rainMm: 1164, dju18: 3318, windDir: "O", windKmh: 7.6, pvYield: 1247, pvSlope: 37, pvSun: 1574 },
    "moudon": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1240, pvSlope: 38, pvSun: 1559 },
    "moutier": { sunKwh: 1254, tmean: 8.9, tminJan: -14.6, rainMm: 1062, dju18: 3328, windDir: "OSO", windKmh: 6.9, pvYield: 1089, pvSlope: 35, pvSun: 1381 },
    "nendaz": { sunKwh: 1309, tmean: 0.0, tminJan: -26.3, rainMm: 945, dju18: 6568, windDir: "O", windKmh: 5.5, pvYield: 1004, pvSlope: 29, pvSun: 1232 },
    "neuchatel": { sunKwh: 1254, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1194, pvSlope: 37, pvSun: 1512 },
    "nyon": { sunKwh: 1309, tmean: 9.0, tminJan: -18.3, rainMm: 1164, dju18: 3318, windDir: "O", windKmh: 7.6, pvYield: 1286, pvSlope: 38, pvSun: 1636 },
    "ollon": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1256, pvSlope: 39, pvSun: 1559 },
    "onex": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1252, pvSlope: 37, pvSun: 1590 },
    "orbe": { sunKwh: 1309, tmean: 9.0, tminJan: -18.3, rainMm: 1164, dju18: 3318, windDir: "O", windKmh: 7.6, pvYield: 1234, pvSlope: 37, pvSun: 1557 },
    "orsieres": { sunKwh: 1357, tmean: 3.4, tminJan: -25.3, rainMm: 1146, dju18: 5346, windDir: "S", windKmh: 3.1, pvYield: 1081, pvSlope: 34, pvSun: 1317 },
    "payerne": { sunKwh: 1309, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1224, pvSlope: 38, pvSun: 1545 },
    "perly-certoux": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1248, pvSlope: 37, pvSun: 1587 },
    "peseux": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1146, pvSlope: 35, pvSun: 1427 },
    "plan-les-ouates": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1239, pvSlope: 37, pvSun: 1569 },
    "porrentruy": { sunKwh: 1254, tmean: 9.1, tminJan: -13.5, rainMm: 1000, dju18: 3259, windDir: "OSO", windKmh: 7.1, pvYield: 1135, pvSlope: 38, pvSun: 1423 },
    "port-valais": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 914, pvSlope: 29, pvSun: 1166 },
    "prangins": { sunKwh: 1309, tmean: 9.0, tminJan: -18.3, rainMm: 1164, dju18: 3318, windDir: "O", windKmh: 7.6, pvYield: 1283, pvSlope: 37, pvSun: 1633 },
    "pregny-chambesy": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1257, pvSlope: 38, pvSun: 1596 },
    "presinge": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1260, pvSlope: 38, pvSun: 1598 },
    "prilly": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1222, pvSlope: 38, pvSun: 1548 },
    "puidoux": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1164, pvSlope: 38, pvSun: 1466 },
    "pully": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1188, pvSlope: 38, pvSun: 1498 },
    "puplinge": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1267, pvSlope: 38, pvSun: 1607 },
    "randogne": { sunKwh: 1309, tmean: 0.0, tminJan: -26.3, rainMm: 945, dju18: 6568, windDir: "O", windKmh: 5.5, pvYield: 1019, pvSlope: 29, pvSun: 1235 },
    "reconvilier": { sunKwh: 1254, tmean: 8.6, tminJan: -17.2, rainMm: 1142, dju18: 3445, windDir: "O", windKmh: 6.4, pvYield: 1120, pvSlope: 35, pvSun: 1417 },
    "renens": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1230, pvSlope: 38, pvSun: 1562 },
    "riaz": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1180, pvSlope: 39, pvSun: 1472 },
    "rolle": { sunKwh: 1309, tmean: 9.0, tminJan: -18.3, rainMm: 1164, dju18: 3318, windDir: "O", windKmh: 7.6, pvYield: 1265, pvSlope: 37, pvSun: 1606 },
    "romont": { sunKwh: 1254, tmean: 8.6, tminJan: -17.2, rainMm: 1142, dju18: 3445, windDir: "O", windKmh: 6.4, pvYield: 1182, pvSlope: 36, pvSun: 1500 },
    "russin": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1260, pvSlope: 37, pvSun: 1601 },
    "saignelegier": { sunKwh: 1254, tmean: 9.1, tminJan: -13.5, rainMm: 1000, dju18: 3259, windDir: "OSO", windKmh: 7.1, pvYield: 1096, pvSlope: 36, pvSun: 1367 },
    "saint-aubin-sauges": { sunKwh: 1309, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1239, pvSlope: 37, pvSun: 1567 },
    "saint-blaise": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1212, pvSlope: 38, pvSun: 1512 },
    "saint-imier": { sunKwh: 1254, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1100, pvSlope: 36, pvSun: 1377 },
    "saint-leonard": { sunKwh: 1309, tmean: 4.1, tminJan: -23.1, rainMm: 1175, dju18: 5086, windDir: "SO", windKmh: 4.0, pvYield: 1366, pvSlope: 38, pvSun: 1681 },
    "saint-maurice": { sunKwh: 1309, tmean: 3.4, tminJan: -25.3, rainMm: 1146, dju18: 5346, windDir: "S", windKmh: 3.1, pvYield: 1075, pvSlope: 37, pvSun: 1344 },
    "saint-prex": { sunKwh: 1309, tmean: 9.0, tminJan: -18.3, rainMm: 1164, dju18: 3318, windDir: "O", windKmh: 7.6, pvYield: 1249, pvSlope: 37, pvSun: 1584 },
    "saint-ursanne": { sunKwh: 1309, tmean: 8.6, tminJan: -17.2, rainMm: 1142, dju18: 3445, windDir: "O", windKmh: 6.4, pvYield: 1124, pvSlope: 39, pvSun: 1392 },
    "sainte-croix": { sunKwh: 1309, tmean: 8.6, tminJan: -16.3, rainMm: 1215, dju18: 3419, windDir: "SO", windKmh: 8.9, pvYield: 1060, pvSlope: 33, pvSun: 1340 },
    "salgesch": { sunKwh: 1309, tmean: 4.1, tminJan: -23.1, rainMm: 1175, dju18: 5086, windDir: "SO", windKmh: 4.0, pvYield: 1335, pvSlope: 38, pvSun: 1648 },
    "salvan": { sunKwh: 1309, tmean: 3.4, tminJan: -25.3, rainMm: 1146, dju18: 5346, windDir: "S", windKmh: 3.1, pvYield: 1045, pvSlope: 29, pvSun: 1314 },
    "satigny": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1261, pvSlope: 37, pvSun: 1602 },
    "saviese": { sunKwh: 1309, tmean: 4.1, tminJan: -23.1, rainMm: 1175, dju18: 5086, windDir: "SO", windKmh: 4.0, pvYield: 1271, pvSlope: 38, pvSun: 1576 },
    "savigny": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1238, pvSlope: 39, pvSun: 1564 },
    "saxon": { sunKwh: 1309, tmean: 3.4, tminJan: -25.3, rainMm: 1146, dju18: 5346, windDir: "S", windKmh: 3.1, pvYield: 1119, pvSlope: 32, pvSun: 1408 },
    "sembrancher": { sunKwh: 1309, tmean: 3.4, tminJan: -25.3, rainMm: 1146, dju18: 5346, windDir: "S", windKmh: 3.1, pvYield: 1226, pvSlope: 35, pvSun: 1486 },
    "sierre": { sunKwh: 1309, tmean: 4.1, tminJan: -23.1, rainMm: 1175, dju18: 5086, windDir: "SO", windKmh: 4.0, pvYield: 1211, pvSlope: 36, pvSun: 1486 },
    "sion": { sunKwh: 1309, tmean: 0.0, tminJan: -26.3, rainMm: 945, dju18: 6568, windDir: "O", windKmh: 5.5, pvYield: 1192, pvSlope: 35, pvSun: 1471 },
    "sonceboz-sombeval": { sunKwh: 1254, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1072, pvSlope: 31, pvSun: 1367 },
    "soral": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1280, pvSlope: 38, pvSun: 1625 },
    "tavannes": { sunKwh: 1254, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1142, pvSlope: 37, pvSun: 1434 },
    "thonex": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1262, pvSlope: 37, pvSun: 1592 },
    "tramelan": { sunKwh: 1254, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1139, pvSlope: 38, pvSun: 1420 },
    "trient": { sunKwh: 1309, tmean: 3.4, tminJan: -25.3, rainMm: 1146, dju18: 5346, windDir: "S", windKmh: 3.1, pvYield: 882, pvSlope: 23, pvSun: 1098 },
    "troinex": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1220, pvSlope: 36, pvSun: 1549 },
    "troistorrents": { sunKwh: 1309, tmean: 3.4, tminJan: -25.3, rainMm: 1146, dju18: 5346, windDir: "S", windKmh: 3.1, pvYield: 1015, pvSlope: 33, pvSun: 1275 },
    "val-dilliez": { sunKwh: 1309, tmean: 3.4, tminJan: -25.3, rainMm: 1146, dju18: 5346, windDir: "S", windKmh: 3.1, pvYield: 1086, pvSlope: 32, pvSun: 1362 },
    "valangin": { sunKwh: 1309, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1242, pvSlope: 38, pvSun: 1572 },
    "vallorbe": { sunKwh: 1309, tmean: 9.0, tminJan: -18.3, rainMm: 1164, dju18: 3318, windDir: "O", windKmh: 7.6, pvYield: 1078, pvSlope: 30, pvSun: 1359 },
    "vanduvres": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1267, pvSlope: 38, pvSun: 1607 },
    "varen": { sunKwh: 1309, tmean: 4.1, tminJan: -23.1, rainMm: 1175, dju18: 5086, windDir: "SO", windKmh: 4.0, pvYield: 1409, pvSlope: 41, pvSun: 1725 },
    "vaulruz": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1116, pvSlope: 36, pvSun: 1399 },
    "venthone": { sunKwh: 1309, tmean: 4.1, tminJan: -23.1, rainMm: 1175, dju18: 5086, windDir: "SO", windKmh: 4.0, pvYield: 1404, pvSlope: 40, pvSun: 1723 },
    "vernier": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1250, pvSlope: 37, pvSun: 1590 },
    "verossaz": { sunKwh: 1309, tmean: 3.4, tminJan: -25.3, rainMm: 1146, dju18: 5346, windDir: "S", windKmh: 3.1, pvYield: 1064, pvSlope: 29, pvSun: 1339 },
    "versoix": { sunKwh: 1309, tmean: 9.0, tminJan: -18.3, rainMm: 1164, dju18: 3318, windDir: "O", windKmh: 7.6, pvYield: 1268, pvSlope: 38, pvSun: 1613 },
    "vetroz": { sunKwh: 1309, tmean: 0.0, tminJan: -26.3, rainMm: 945, dju18: 6568, windDir: "O", windKmh: 5.5, pvYield: 1088, pvSlope: 35, pvSun: 1365 },
    "vevey": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1217, pvSlope: 39, pvSun: 1526 },
    "veyrier": { sunKwh: 1309, tmean: 8.9, tminJan: -20.1, rainMm: 1106, dju18: 3355, windDir: "OSO", windKmh: 5.4, pvYield: 1240, pvSlope: 37, pvSun: 1572 },
    "veysonnaz": { sunKwh: 1309, tmean: 0.0, tminJan: -26.3, rainMm: 945, dju18: 6568, windDir: "O", windKmh: 5.5, pvYield: 1108, pvSlope: 32, pvSun: 1347 },
    "vicques": { sunKwh: 1381, tmean: 9.8, tminJan: -14.2, rainMm: 1204, dju18: 3126, windDir: "NNE", windKmh: 4.7, pvYield: 1291, pvSlope: 39, pvSun: 1646 },
    "villars-sur-glane": { sunKwh: 1309, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1174, pvSlope: 39, pvSun: 1462 },
    "villeneuve": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1120, pvSlope: 33, pvSun: 1413 },
    "vionnaz": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1161, pvSlope: 38, pvSun: 1451 },
    "volleges": { sunKwh: 1240, tmean: 9.1, tminJan: -15.0, rainMm: 1310, dju18: 3289, windDir: "ONO", windKmh: 6.8, pvYield: 1137, pvSlope: 37, pvSun: 1439 },
    "vouvry": { sunKwh: 1309, tmean: 7.3, tminJan: -21.5, rainMm: 1172, dju18: 3893, windDir: "SO", windKmh: 5.0, pvYield: 1145, pvSlope: 37, pvSun: 1431 },
    "yverdon-les-bains": { sunKwh: 1309, tmean: 8.2, tminJan: -16.1, rainMm: 1150, dju18: 3583, windDir: "OSO", windKmh: 8.2, pvYield: 1246, pvSlope: 37, pvSun: 1575 },
};

/**
 * Faits locaux d'une commune. Accepte indifferemment le slug de la cible
 * national-targets et le slug derive du nom de la commune.
 */
export function getLocalFacts(...candidates: (string | undefined | null)[]): LocalFacts | undefined {
    for (const candidate of candidates) {
        if (!candidate) continue;
        const direct = LOCAL_FACTS[candidate];
        if (direct) return direct;
    }
    return undefined;
}
