insert into users values (1, 'Juliana Murchison', 'juliana.murchison@db.com', '12345678', 'Supervisor');
insert into users values (2, 'Jill Moochler', 'jill.moochler@db.com', '12345678', 'Coodinator');
insert into users values (3, 'Robert Gardner', 'robert.gardner@db.com', '12345678', 'Supervisor');
insert into users values (4, 'Howard Bloxom', 'howard.bloxom@db.com', '12345678', 'Analyst');
insert into users values (5, 'Keith Thomas', 'keith.thomas@db.com', '12345678', 'Analyst');

insert into book values (1, 'book_1');
insert into book values (2, 'book_2');
insert into book values (3, 'book_3');
insert into book values (4, 'book_4');
insert into book values (5, 'book_5');
insert into book values (6, 'book_6');
insert into book values (7, 'book_7');
insert into book values (8, 'book_8');
insert into book values (9, 'book_9');
insert into book values (10, 'book_10');
insert into book values (11, 'book_11');
insert into book values (12, 'book_12');
insert into book values (13, 'book_13');
insert into book values (14, 'book_14');
insert into book values (15, 'book_15');
insert into book values (16, 'book_16');
insert into book values (17, 'book_17');
insert into book values (18, 'book_18');
insert into book values (19, 'book_19');
insert into book values (20, 'book_20');

insert into bookuser values (1,1, 5);
insert into bookuser values (2,2, 3);
insert into bookuser values (3,3, 5);
insert into bookuser values (4,4, 2);
insert into bookuser values (5,5, 3);
insert into bookuser values (6,6, 2);
insert into bookuser values (7,7, 1);
insert into bookuser values (8,8, 2);
insert into bookuser values (9,9, 1);
insert into bookuser values (10,10, 1);
insert into bookuser values (11,11, 2);
insert into bookuser values (12,12, 3);
insert into bookuser values (13,13, 5);
insert into bookuser values (14,14, 5);
insert into bookuser values (15,15, 1);
insert into bookuser values (16,16, 1);
insert into bookuser values (17,17, 3);
insert into bookuser values (18,18, 4);
insert into bookuser values (19,19, 2);
insert into bookuser values (20,20, 1);

insert into counterparty values (1, 'Edward Richards');
insert into counterparty values (2, 'Christopher Edwards');
insert into counterparty values (3, 'Michael Jackson');
insert into counterparty values (4, 'Marsha Brown');
insert into counterparty values (5, 'Olivia Mahoney');
insert into counterparty values (6, 'Yolanda Williamson');
insert into counterparty values (7, 'Grady Blethen');
insert into counterparty values (8, 'Gerald Kubik');
insert into counterparty values (9, 'James Nadeau');
insert into counterparty values (10, 'Lucinda Baker');
insert into counterparty values (11, 'Bruce Smith');
insert into counterparty values (12, 'Patrick Martin');
insert into counterparty values (13, 'Keith Hendrix');
insert into counterparty values (14, 'Mary Behnke');
insert into counterparty values (15, 'Bobbie Cobine');

insert into securities values (1, 'INR15L0J5ZYK', 'W7W24G6UB', 'SBA', '2022-08-25', 9, 'Agency', 1000, 1);
insert into securities values (2, 'INT8RXH3JWKB', 'Z96MYDSR3', 'TN', '2022-08-5', 5, 'Government', 2000, 0);
insert into securities values (3, 'INLX7HREZ3MS', '2CZLBK1RM', 'YY', '2022-08-27', 6, 'Municipal', 1000, 1);
insert into securities values (4, 'INGZZXLPWI5O', 'MEKJMOG15', 'ABC', '2022-08-16', 2, 'Corporate', 5000, 1);
insert into securities values (5, 'INFADKZW2U0M', 'WP3DP4YLZ', 'ZZ', '2022-08-19', 4, 'Municipal', 5000, 1);
insert into securities values (6, 'IN18E77MNKD6', 'GHJOOE2SJ', 'XYZ', '2022-08-13', 5, 'Corporate', 4000, 1);
insert into securities values (7, 'INYWL79CIR87', 'ND2O1PLE7', 'SBA', '2022-08-8', 2, 'Agency', 4000, 0);
insert into securities values (8, 'IN0X8ZWVDIDG', 'WBX447XZP', 'MH', '2022-08-11', 10, 'Government', 1000, 1);
insert into securities values (9, 'IN39CVVLUD44', 'WTOW1PUOQ', 'PQR', '2022-08-17', 4, 'Corporate', 4000, 1);
insert into securities values (10, 'INRN99TSGD7B', 'EJ5MEJJ0U', 'MH', '2022-08-17', 3, 'Government', 5000, 1);

insert into trade values (1, 8, 1, 1, 3, 1, 974, 0, '2022-08-6', '2022-08-8');
insert into trade values (2, 17, 5, 10, 1, 1, 4774, 1, '2022-08-3', '2022-08-5');
insert into trade values (3, 11, 15, 3, 4, 1, 1090, 1, '2022-08-2', '2022-08-6');
insert into trade values (4, 11, 1, 4, 2, 1, 4741, 0, '2022-08-2', '2022-08-6');
insert into trade values (5, 7, 10, 5, 4, 1, 4964, 0, '2022-08-3', '2022-08-5');
insert into trade values (6, 5, 8, 5, 2, 1, 4372, 0, '2022-08-2', '2022-08-4');
insert into trade values (7, 1, 13, 3, 2, 1, 1099, 0, '2022-08-22', '2022-08-24');
insert into trade values (8, 13, 6, 7, 4, 1, 3396, 1, '2022-08-4', '2022-08-6');
insert into trade values (9, 16, 7, 6, 3, 1, 3929, 0, '2022-08-2', '2022-08-6');
insert into trade values (10, 2, 3, 3, 4, 1, 985, 1, '2022-08-24', '2022-08-26');
insert into trade values (11, 20, 9, 1, 3, 1, 961, 1, '2022-08-16', '2022-08-18');
insert into trade values (12, 17, 5, 7, 2, 0, 4575, 0, '2022-08-1', '2022-08-3');
insert into trade values (13, 8, 13, 4, 2, 1, 5071, 1, '2022-08-5', '2022-08-7');
insert into trade values (14, 9, 4, 3, 4, 1, 1035, 0, '2022-08-16', '2022-08-18');
insert into trade values (15, 12, 2, 1, 2, 1, 1120, 0, '2022-08-2', '2022-08-4');
insert into trade values (16, 15, 12, 9, 3, 1, 3757, 0, '2022-08-10', '2022-08-12');
insert into trade values (17, 12, 4, 1, 1, 1, 943, 0, '2022-08-4', '2022-08-6');
insert into trade values (18, 18, 14, 2, 3, 0, 2251, 1, '2022-08-1', '2022-08-1');
insert into trade values (19, 7, 4, 2, 4, 1, 1872, 0, '2022-08-1', '2022-08-3');
insert into trade values (20, 3, 2, 5, 2, 1, 4452, 1, '2022-08-9', '2022-08-11');
insert into trade values (21, 2, 11, 6, 3, 1, 3629, 1, '2022-08-4', '2022-08-6');
insert into trade values (22, 4, 15, 8, 1, 1, 1007, 1, '2022-08-7', '2022-08-9');
insert into trade values (23, 5, 12, 2, 2, 1, 2099, 1, '2022-08-1', '2022-08-1');
insert into trade values (24, 15, 14, 10, 1, 1, 4560, 0, '2022-08-4', '2022-08-6');
insert into trade values (25, 2, 6, 2, 2, 0, 2211, 1, '2022-08-1', '2022-08-1');
insert into trade values (26, 5, 2, 3, 3, 1, 836, 0, '2022-08-9', '2022-08-11');
insert into trade values (27, 16, 1, 7, 1, 1, 4630, 1, '2022-08-2', '2022-08-5');
insert into trade values (28, 20, 6, 3, 1, 1, 1143, 0, '2022-08-16', '2022-08-18');
insert into trade values (29, 6, 4, 8, 3, 1, 994, 0, '2022-08-5', '2022-08-7');
insert into trade values (30, 16, 6, 3, 3, 1, 967, 0, '2022-08-1', '2022-08-3');
insert into trade values (31, 14, 14, 6, 1, 1, 3960, 0, '2022-08-6', '2022-08-8');
insert into trade values (32, 2, 9, 4, 2, 1, 4636, 1, '2022-08-3', '2022-08-5');
insert into trade values (33, 15, 11, 7, 3, 0, 3865, 0, '2022-08-1', '2022-08-3');
insert into trade values (34, 7, 7, 9, 1, 1, 4042, 1, '2022-08-7', '2022-08-9');
insert into trade values (35, 1, 9, 8, 2, 1, 1058, 0, '2022-08-5', '2022-08-7');
insert into trade values (36, 5, 10, 7, 1, 1, 3865, 0, '2022-08-5', '2022-08-7');
insert into trade values (37, 11, 13, 7, 1, 1, 4644, 1, '2022-08-2', '2022-08-6');
insert into trade values (38, 2, 2, 9, 4, 1, 3364, 0, '2022-08-3', '2022-08-5');
insert into trade values (39, 14, 6, 6, 2, 1, 4217, 0, '2022-08-9', '2022-08-11');
insert into trade values (40, 17, 13, 8, 1, 1, 1099, 1, '2022-08-2', '2022-08-4');
insert into trade values (41, 7, 2, 6, 2, 1, 3717, 0, '2022-08-7', '2022-08-9');
insert into trade values (42, 15, 10, 2, 3, 0, 1807, 1, '2022-08-1', '2022-08-3');
insert into trade values (43, 2, 14, 9, 4, 1, 3565, 0, '2022-08-4', '2022-08-6');
insert into trade values (44, 13, 4, 8, 1, 1, 992, 0, '2022-08-7', '2022-08-9');
insert into trade values (45, 7, 10, 5, 3, 1, 4442, 1, '2022-08-12', '2022-08-14');
insert into trade values (46, 16, 15, 3, 1, 1, 1014, 1, '2022-08-16', '2022-08-18');
insert into trade values (47, 7, 4, 3, 4, 1, 869, 0, '2022-08-3', '2022-08-5');
insert into trade values (48, 11, 11, 1, 1, 1, 1012, 1, '2022-08-1', '2022-08-3');
insert into trade values (49, 11, 15, 2, 3, 0, 1990, 1, '2022-08-2', '2022-08-4');
insert into trade values (50, 11, 6, 4, 3, 1, 5115, 1, '2022-08-9', '2022-08-11');
insert into trade values (51, 10, 5, 9, 2, 1, 3743, 0, '2022-08-7', '2022-08-9');
insert into trade values (52, 18, 12, 4, 2, 1, 5593, 1, '2022-08-2', '2022-08-4');
insert into trade values (53, 3, 10, 5, 2, 1, 5067, 1, '2022-08-3', '2022-08-5');
insert into trade values (54, 12, 10, 8, 1, 1, 893, 0, '2022-08-2', '2022-08-4');
insert into trade values (55, 3, 4, 8, 4, 1, 1076, 1, '2022-08-8', '2022-08-10');
insert into trade values (56, 6, 10, 10, 2, 1, 4582, 0, '2022-08-5', '2022-08-7');
insert into trade values (57, 8, 1, 5, 3, 1, 5090, 0, '2022-08-5', '2022-08-7');
insert into trade values (58, 14, 15, 2, 1, 0, 2182, 1, '2022-08-1', '2022-08-1');
insert into trade values (59, 16, 4, 4, 1, 1, 5127, 0, '2022-08-6', '2022-08-8');
insert into trade values (60, 8, 13, 6, 4, 1, 3925, 0, '2022-08-2', '2022-08-7');
insert into trade values (61, 9, 9, 8, 1, 1, 858, 0, '2022-08-5', '2022-08-7');
insert into trade values (62, 5, 10, 7, 2, 1, 3671, 1, '2022-08-2', '2022-08-5');
insert into trade values (63, 9, 5, 1, 3, 1, 1088, 1, '2022-08-1', '2022-08-2');
insert into trade values (64, 6, 13, 10, 2, 1, 5706, 1, '2022-08-1', '2022-08-1');
insert into trade values (65, 12, 6, 5, 4, 1, 5564, 0, '2022-08-2', '2022-08-4');
insert into trade values (66, 17, 11, 1, 1, 1, 890, 0, '2022-08-1', '2022-08-2');
insert into trade values (67, 14, 7, 8, 2, 1, 1114, 0, '2022-08-2', '2022-08-5');
insert into trade values (68, 10, 3, 8, 4, 1, 1002, 0, '2022-08-2', '2022-08-6');
insert into trade values (69, 19, 6, 9, 2, 1, 3871, 0, '2022-08-1', '2022-08-3');
insert into trade values (70, 11, 5, 3, 1, 1, 1138, 0, '2022-08-6', '2022-08-8');
insert into trade values (71, 10, 2, 7, 3, 0, 4159, 0, '2022-08-1', '2022-08-1');
insert into trade values (72, 1, 5, 2, 1, 0, 1680, 1, '2022-08-2', '2022-08-4');
insert into trade values (73, 4, 12, 1, 4, 1, 976, 1, '2022-08-1', '2022-08-3');
insert into trade values (74, 16, 10, 3, 1, 1, 936, 1, '2022-08-8', '2022-08-10');
insert into trade values (75, 13, 4, 5, 1, 1, 5458, 1, '2022-08-15', '2022-08-17');
insert into trade values (76, 18, 9, 2, 2, 1, 1997, 0, '2022-08-2', '2022-08-4');
insert into trade values (77, 17, 12, 3, 1, 1, 1016, 1, '2022-08-17', '2022-08-19');
insert into trade values (78, 16, 14, 1, 3, 1, 1018, 0, '2022-08-17', '2022-08-19');
insert into trade values (79, 2, 3, 9, 3, 1, 4031, 1, '2022-08-9', '2022-08-11');
insert into trade values (80, 7, 14, 7, 4, 0, 4380, 1, '2022-08-1', '2022-08-1');
insert into trade values (81, 11, 1, 5, 1, 1, 4615, 1, '2022-08-1', '2022-08-3');
insert into trade values (82, 18, 9, 9, 1, 1, 3929, 0, '2022-08-3', '2022-08-5');
insert into trade values (83, 10, 13, 4, 2, 1, 5362, 0, '2022-08-13', '2022-08-15');
insert into trade values (84, 11, 14, 3, 3, 1, 1138, 1, '2022-08-10', '2022-08-12');
insert into trade values (85, 10, 2, 10, 3, 1, 5170, 0, '2022-08-3', '2022-08-5');
insert into trade values (86, 13, 4, 7, 2, 0, 4039, 1, '2022-08-1', '2022-08-1');
insert into trade values (87, 12, 5, 6, 1, 1, 4010, 1, '2022-08-2', '2022-08-4');
insert into trade values (88, 3, 14, 2, 4, 0, 2175, 1, '2022-08-2', '2022-08-5');
insert into trade values (89, 2, 14, 3, 2, 1, 961, 0, '2022-08-9', '2022-08-11');
insert into trade values (90, 3, 7, 7, 1, 1, 4010, 1, '2022-08-4', '2022-08-6');
insert into trade values (91, 12, 15, 2, 4, 1, 1929, 1, '2022-08-1', '2022-08-3');
insert into trade values (92, 10, 8, 9, 2, 1, 4453, 1, '2022-08-1', '2022-08-2');
insert into trade values (93, 13, 3, 10, 1, 1, 5383, 0, '2022-08-14', '2022-08-16');
insert into trade values (94, 10, 12, 1, 4, 1, 994, 1, '2022-08-15', '2022-08-17');
insert into trade values (95, 4, 8, 4, 2, 1, 5366, 1, '2022-08-1', '2022-08-1');
insert into trade values (96, 11, 15, 8, 2, 1, 840, 1, '2022-08-5', '2022-08-7');
insert into trade values (97, 19, 5, 8, 3, 1, 997, 1, '2022-08-8', '2022-08-10');
insert into trade values (98, 19, 2, 10, 1, 1, 4704, 0, '2022-08-2', '2022-08-4');
insert into trade values (99, 19, 1, 7, 3, 1, 3860, 1, '2022-08-1', '2022-08-3');
insert into trade values (100, 5, 1, 10, 1, 1, 4391, 0, '2022-08-8', '2022-08-10');