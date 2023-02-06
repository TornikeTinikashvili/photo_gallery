create database `images`;
use images;

create table gallery(
id_image int primary key auto_increment not null,
img_source varchar(250),
img_tags varchar(50),
img_title varchar(50),
img_description varchar(50)
)engine=innodb;

insert into gallery(img_source, img_tags, img_title, img_description) values
("https://plus.unsplash.com/premium_photo-1661746632807-00d21bac5826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NTcxNjY5NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","testTag","testTitle","testDescription"),
("https://images.unsplash.com/photo-1587620962725-abab7fe55159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3Mzk4ODMxMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","testTag2","testTitle2","testDescription2"),
("https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDY4MDU2NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080","testTag3","testTitle3","testDescription3");