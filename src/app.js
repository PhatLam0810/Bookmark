// App.js
import React, { useState } from 'react';
import BookmarkButton from './BookmarkButton';
import './App.css'; // Import file CSS
import FavoriteList from './FavoriteList';

const App = () => {
  const [favoritesChanged, setFavoritesChanged] = useState(false);

  const handleFavoriteRemoved = (removedId) => {
    // Xử lý logic khi một yêu thích bị xóa
    console.log(`Yêu thích với id ${removedId} đã bị xóa`);
  };
  const stories = [
    {
        "id": 12362,
        "name": "Sei Smiley Gakuen Koutoubu Smiley*2G",
        "url": "sei-smiley-gakuen-koutoubu-smiley-2g",
        "created_date": "2018-06-01T23:10:51.620000+07:00",
        "lastupdated_date": null,
        "sort_date": "2018-06-01T23:45:01.123000+07:00"
    },
    {
        "id": 12370,
        "name": "Celeste Blue",
        "url": "celeste-blue",
        "created_date": "2018-06-02T23:26:46.460000+07:00",
        "lastupdated_date": null,
        "sort_date": "2018-06-02T23:27:36.260000+07:00"
    },
    {
        "id": 1,
        "name": "Half & Half",
        "url": "half-and-half",
        "created_date": "2012-01-26T03:50:23.860000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-01-26T03:54:58.030000+07:00"
    },
    {
        "id": 5,
        "name": "$100 is Too Cheap",
        "url": "100-is-too-cheap",
        "created_date": "2012-01-27T14:13:28.827000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-01-27T14:14:22.483000+07:00"
    },
    {
        "id": 6,
        "name": "Koorihime ga kitan - Công chúa băng tuyết",
        "url": "koorihime-ga-kitan",
        "created_date": "2012-01-27T14:17:48.280000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-01-27T14:20:00.483000+07:00"
    },
    {
        "id": 45,
        "name": "The Hunt for Energy",
        "url": "the-hunt-for-energy",
        "created_date": "2012-02-04T17:26:47.820000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-04T17:34:37.837000+07:00"
    },
    {
        "id": 39,
        "name": "Loveplus Rinko Days",
        "url": "loveplus-rinko-days",
        "created_date": "2012-02-04T06:22:27.683000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-04T06:27:46.350000+07:00"
    },
    {
        "id": 55,
        "name": "Mar Omega",
        "url": "mar-omega",
        "created_date": "2012-02-05T05:05:35.463000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-05T05:07:17.790000+07:00"
    },
    {
        "id": 58,
        "name": "Rose Hip Rose",
        "url": "rose-hip-rose",
        "created_date": "2012-02-05T06:18:55.417000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-05T06:23:06.273000+07:00"
    },
    {
        "id": 60,
        "name": "Love Hona Kankei",
        "url": "love-hona-kankei",
        "created_date": "2012-02-05T15:33:54.167000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-05T15:37:38.197000+07:00"
    },
    {
        "id": 61,
        "name": "Ipaasha",
        "url": "ipaasha",
        "created_date": "2012-02-05T15:51:59.930000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-05T15:52:33.603000+07:00"
    },
    {
        "id": 62,
        "name": "The Miyama-Uguisu Mansion Incident",
        "url": "the-miyamauguisu-mansion-incident",
        "created_date": "2012-02-05T15:59:32.650000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-05T16:00:30.617000+07:00"
    },
    {
        "id": 63,
        "name": "Ability Shop",
        "url": "ability-shop",
        "created_date": "2012-02-05T16:06:05.977000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-05T16:06:38.713000+07:00"
    },
    {
        "id": 65,
        "name": "Bounce and Sway",
        "url": "bounce-and-sway",
        "created_date": "2012-02-05T17:35:00.023000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-05T17:35:39.087000+07:00"
    },
    {
        "id": 64,
        "name": "Hohzuki Island - Đảo kinh hoàng",
        "url": "hohzuki-island-dao-kinh-hoang",
        "created_date": "2012-02-05T17:27:51.010000+07:00",
        "lastupdated_date": null,
        "sort_date": "2017-05-27T05:31:54.810000+07:00"
    },
    {
        "id": 70,
        "name": "Bitter Virgin",
        "url": "bitter-virgin",
        "created_date": "2012-02-05T18:20:50.703000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-05T18:37:42.077000+07:00"
    },
    {
        "id": 72,
        "name": "Glass no Megami",
        "url": "glass-no-megami",
        "created_date": "2012-02-05T18:35:27.327000+07:00",
        "lastupdated_date": null,
        "sort_date": "2018-10-22T00:24:28.097000+07:00"
    },
    {
        "id": 56,
        "name": "Pretty Face",
        "url": "pretty-face-ecchi-hot",
        "created_date": "2012-02-05T05:15:11.213000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-06T01:18:45.203000+07:00"
    },
    {
        "id": 77,
        "name": "Truyền Nhân Atula",
        "url": "truyen-nhan-atula",
        "created_date": "2012-02-05T21:29:14.077000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-06T05:27:29.017000+07:00"
    },
    {
        "id": 95,
        "name": "Memories of Emanon",
        "url": "memories-of-emanon",
        "created_date": "2012-02-06T17:13:17.233000+07:00",
        "lastupdated_date": null,
        "sort_date": "2019-02-19T21:02:41.653000+07:00"
    },
    {
        "id": 105,
        "name": "Đỉnh Cấp Lưu Manh",
        "url": "dinh-cap-luu-manh",
        "created_date": "2012-02-07T00:22:17.563000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-07T00:26:22.780000+07:00"
    },
    {
        "id": 91,
        "name": "Suzuka",
        "url": "suzuka",
        "created_date": "2012-02-06T05:18:00.780000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-07-08T17:33:07.943000+07:00"
    },
    {
        "id": 82,
        "name": "Ice Revolution",
        "url": "ice-revolution",
        "created_date": "2012-02-06T01:49:55.483000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-07T03:11:11.813000+07:00"
    },
    {
        "id": 99,
        "name": "Shana oh Yoshitsune ( Thiếu niên vương phần 1 )",
        "url": "shana-oh-yoshitsune",
        "created_date": "2012-02-06T19:55:41.907000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-07T03:39:14.110000+07:00"
    },
    {
        "id": 119,
        "name": "Truyền Nhân Atula phần 2",
        "url": "atula-phan-2",
        "created_date": "2012-02-07T22:15:45.173000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-07T22:36:20.907000+07:00"
    },
    {
        "id": 127,
        "name": "Akiiro Bousou Biyori",
        "url": "akiiro-bousou-biyori",
        "created_date": "2012-02-08T07:11:03.047000+07:00",
        "lastupdated_date": null,
        "sort_date": "2021-10-21T06:26:41.097000+07:00"
    },
    {
        "id": 111,
        "name": "Yosuga no Sora",
        "url": "yosuga-no-sora",
        "created_date": "2012-02-07T04:41:08.890000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-08T15:58:27.563000+07:00"
    },
    {
        "id": 131,
        "name": "TAL-Kẻ lập dị",
        "url": "talke-lap-di",
        "created_date": "2012-02-08T18:05:40.703000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-08T18:07:40.843000+07:00"
    },
    {
        "id": 134,
        "name": "Murikuri",
        "url": "murikuri",
        "created_date": "2012-02-08T19:16:19.577000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-08T19:17:05.077000+07:00"
    },
    {
        "id": 136,
        "name": "Adventure Boys",
        "url": "adventureboy",
        "created_date": "2012-02-08T20:35:52.047000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-08T20:38:58.437000+07:00"
    },
    {
        "id": 73,
        "name": "Chrono Crusade",
        "url": "chrono-crusade",
        "created_date": "2012-02-05T18:39:36.797000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-03-05T03:02:48.813000+07:00"
    },
    {
        "id": 144,
        "name": "Short Program",
        "url": "short-program-new",
        "created_date": "2012-02-09T04:55:51.313000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-09T05:01:53.953000+07:00"
    },
    {
        "id": 145,
        "name": "idol a (full 4 chap)",
        "url": "idol-a",
        "created_date": "2012-02-09T05:23:54.797000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-09T05:25:20.280000+07:00"
    },
    {
        "id": 147,
        "name": "A Trap can also Use a Girl's Weapon",
        "url": "a-trap-can-also-use-a-girls-weapon",
        "created_date": "2012-02-09T06:36:24.280000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-09T06:38:13.860000+07:00"
    },
    {
        "id": 148,
        "name": "Family Complex !",
        "url": "family-complex",
        "created_date": "2012-02-09T06:54:29.343000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-09T06:56:53.437000+07:00"
    },
    {
        "id": 151,
        "name": "Nanashi No Asterism",
        "url": "shoujo-guard",
        "created_date": "2012-02-09T17:42:31.500000+07:00",
        "lastupdated_date": null,
        "sort_date": "2017-04-27T19:37:11.477000+07:00"
    },
    {
        "id": 152,
        "name": "Angle Love Song",
        "url": "angle-love-song",
        "created_date": "2012-02-09T17:49:42.797000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-07-29T23:47:23.067000+07:00"
    },
    {
        "id": 156,
        "name": "[18+] Wolf And Mary",
        "url": "18-wolf-and-mary",
        "created_date": "2012-02-09T22:21:48.907000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-09T22:28:23.187000+07:00"
    },
    {
        "id": 158,
        "name": "No Bra, No Panties, No Future",
        "url": "no-bra-no-panties-no-future",
        "created_date": "2012-02-09T23:16:44.813000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-09T23:17:58.233000+07:00"
    },
    {
        "id": 160,
        "name": "Vampire And Shinigami",
        "url": "vampire-and-shinigami",
        "created_date": "2012-02-10T03:40:55.093000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-10T03:42:45.547000+07:00"
    },
    {
        "id": 165,
        "name": "Crows",
        "url": "crows-new",
        "created_date": "2012-02-10T16:03:54.703000+07:00",
        "lastupdated_date": null,
        "sort_date": "2021-06-14T00:24:23.060000+07:00"
    },
    {
        "id": 183,
        "name": "Plus +1",
        "url": "plus-1",
        "created_date": "2012-02-12T00:58:51.143000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-12T01:03:04.807000+07:00"
    },
    {
        "id": 184,
        "name": "Lưc lượng bài trừ tình yêu",
        "url": "luc-luong-bai-tru-tinh-yeu",
        "created_date": "2012-02-12T01:15:06.417000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-12T01:15:43.227000+07:00"
    },
    {
        "id": 138,
        "name": "Kamen Teacher",
        "url": "kamen-teacher",
        "created_date": "2012-02-08T21:06:52.220000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-08T21:18:59.407000+07:00"
    },
    {
        "id": 182,
        "name": "Cửu Long Thành Trại 1",
        "url": "cuu-long-thanh-trai-1",
        "created_date": "2012-02-11T23:58:07.557000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-12T17:30:25.483000+07:00"
    },
    {
        "id": 190,
        "name": "Loop",
        "url": "loop",
        "created_date": "2012-02-12T18:13:05.907000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-12T18:13:36.920000+07:00"
    },
    {
        "id": 192,
        "name": "abase the ace",
        "url": "abase-the-ace",
        "created_date": "2012-02-12T20:29:11.953000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-12T20:30:10.140000+07:00"
    },
    {
        "id": 196,
        "name": "Backstage Mage ▬ [One Shot]",
        "url": "backstage-mage-one-shot",
        "created_date": "2012-02-13T07:44:04.717000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-13T07:45:17.453000+07:00"
    },
    {
        "id": 206,
        "name": "From Your L-I-P-S",
        "url": "from-your-lips",
        "created_date": "2012-02-14T18:12:27.703000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-14T18:14:22.593000+07:00"
    },
    {
        "id": 137,
        "name": "Buttobi Itto",
        "url": "buttobi-itto",
        "created_date": "2012-02-08T20:45:41.267000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-14T18:14:46.233000+07:00"
    },
    {
        "id": 208,
        "name": "Because It Is there !!!",
        "url": "because-it-is-there",
        "created_date": "2012-02-15T08:33:13.390000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-15T08:34:20.750000+07:00"
    },
    {
        "id": 209,
        "name": "Đêm đầu hạ",
        "url": "dem-dau-ha",
        "created_date": "2012-02-15T08:50:24.577000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-15T08:51:02.547000+07:00"
    },
    {
        "id": 166,
        "name": "Moriguchi orito no Teiougaku",
        "url": "moriguchi-orito-no-teiougaku",
        "created_date": "2012-02-10T20:28:57.860000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-10T20:33:33.877000+07:00"
    },
    {
        "id": 210,
        "name": "Bad Company",
        "url": "bad-company-399",
        "created_date": "2012-02-15T23:01:59.577000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-15T23:05:47.860000+07:00"
    },
    {
        "id": 106,
        "name": "Lộc đỉnh kí",
        "url": "loc-dinh-ki",
        "created_date": "2012-02-07T01:16:44.423000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-16T19:06:14.843000+07:00"
    },
    {
        "id": 146,
        "name": "Glamorous",
        "url": "glamorous",
        "created_date": "2012-02-09T06:25:38.563000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-17T16:58:58.983000+07:00"
    },
    {
        "id": 220,
        "name": "Shinshi na Meets Girl",
        "url": "shinshi-na-meets-girl",
        "created_date": "2012-02-18T03:08:41.267000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-18T03:19:52.970000+07:00"
    },
    {
        "id": 79,
        "name": "Ôn Thụy An Quần Hiệp Truyện",
        "url": "on-thuy-an-quan-hiep-truyen",
        "created_date": "2012-02-06T00:35:49.220000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-16T16:22:12.203000+07:00"
    },
    {
        "id": 222,
        "name": "13.",
        "url": "13",
        "created_date": "2012-02-18T18:12:12.437000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-18T18:14:02.767000+07:00"
    },
    {
        "id": 229,
        "name": "Tóc",
        "url": "toc",
        "created_date": "2012-02-20T07:04:09.813000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-20T07:04:57.703000+07:00"
    },
    {
        "id": 231,
        "name": "Kitsune to Atori",
        "url": "kitsune-to-atori",
        "created_date": "2012-02-20T18:02:41.577000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-20T18:07:09.890000+07:00"
    },
    {
        "id": 232,
        "name": "Yuna",
        "url": "yuna",
        "created_date": "2012-02-20T20:30:23.343000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-20T20:31:08.390000+07:00"
    },
    {
        "id": 223,
        "name": "I''s",
        "url": "is",
        "created_date": "2012-02-18T19:11:37.030000+07:00",
        "lastupdated_date": null,
        "sort_date": "2017-06-18T20:56:53.997000+07:00"
    },
    {
        "id": 239,
        "name": "nisekoi one shot nè",
        "url": "nisekoi-one-shot-ne",
        "created_date": "2012-02-21T23:29:13.563000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-21T23:29:49.297000+07:00"
    },
    {
        "id": 240,
        "name": "seven ocean",
        "url": "seven-ocean",
        "created_date": "2012-02-22T00:36:35.453000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-22T18:23:35.573000+07:00"
    },
    {
        "id": 216,
        "name": "Hoa Hồng Tặng Anh",
        "url": "hoa-hong-tang-anh",
        "created_date": "2012-02-17T05:38:12.157000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-18T23:52:19.173000+07:00"
    },
    {
        "id": 107,
        "name": "Angel Densetsu",
        "url": "angel-densetsu",
        "created_date": "2012-02-07T03:16:37.500000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-23T19:00:38.703000+07:00"
    },
    {
        "id": 153,
        "name": "Dageki Joi Saori",
        "url": "dageki-joi-saori",
        "created_date": "2012-02-09T17:58:25.250000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-23T19:51:06.750000+07:00"
    },
    {
        "id": 253,
        "name": "Naughty honey",
        "url": "naughty-honey",
        "created_date": "2012-02-24T04:36:10.563000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-24T04:37:56.377000+07:00"
    },
    {
        "id": 227,
        "name": "Akaneiro Ni Somaru Saka",
        "url": "akaneiro-ni-somaru-saka",
        "created_date": "2012-02-19T17:14:57.703000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-20T05:04:52.657000+07:00"
    },
    {
        "id": 254,
        "name": "Asari tinh nghịch",
        "url": "asari-tinh-nghich",
        "created_date": "2012-02-24T04:47:36.720000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-24T10:29:16.563000+07:00"
    },
    {
        "id": 22,
        "name": "Silvery Crow",
        "url": "silvery-crow",
        "created_date": "2012-02-02T20:55:00.843000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-25T20:36:02.593000+07:00"
    },
    {
        "id": 238,
        "name": "B-Reaction",
        "url": "breaction",
        "created_date": "2012-02-21T16:41:06.377000+07:00",
        "lastupdated_date": null,
        "sort_date": "2019-12-22T23:02:44.260000+07:00"
    },
    {
        "id": 261,
        "name": "Ane Pani",
        "url": "ane-pani",
        "created_date": "2012-02-26T06:40:23.093000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-26T06:44:34.923000+07:00"
    },
    {
        "id": 234,
        "name": "KimiKiss - Various Heroines",
        "url": "kimikiss-various-heroines",
        "created_date": "2012-02-20T22:04:05.720000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-26T16:33:32.610000+07:00"
    },
    {
        "id": 264,
        "name": "Abara",
        "url": "abara",
        "created_date": "2012-02-26T17:28:52.547000+07:00",
        "lastupdated_date": null,
        "sort_date": "2017-09-06T03:05:17.270000+07:00"
    },
    {
        "id": 262,
        "name": "Doremon - Nôbita và Truyền Thuyết Thần Rừng",
        "url": "doremon-nobita-va-truyen-thuyet-than-rung",
        "created_date": "2012-02-26T16:24:01.110000+07:00",
        "lastupdated_date": null,
        "sort_date": "2018-01-03T05:13:50.693000+07:00"
    },
    {
        "id": 59,
        "name": "Black Cat",
        "url": "black-cat",
        "created_date": "2012-02-05T15:17:43.773000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-27T06:11:37+07:00"
    },
    {
        "id": 266,
        "name": "Doremon - Lạc vào thế giới côn trùng",
        "url": "doremon-lac-vao-the-gioi-con-trung",
        "created_date": "2012-02-27T21:09:04.563000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-27T21:10:02.220000+07:00"
    },
    {
        "id": 213,
        "name": "Miniature",
        "url": "miniature",
        "created_date": "2012-02-16T05:37:25.500000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-18T05:20:43.750000+07:00"
    },
    {
        "id": 15,
        "name": "To Love Ru",
        "url": "to-love-ru",
        "created_date": "2012-02-01T20:58:59.377000+07:00",
        "lastupdated_date": null,
        "sort_date": "2016-01-21T02:19:32.050000+07:00"
    },
    {
        "id": 277,
        "name": "Kingdom Hearts",
        "url": "kingdom-hearts-new-new",
        "created_date": "2012-02-29T02:25:30.627000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-29T02:41:28.907000+07:00"
    },
    {
        "id": 278,
        "name": "LiLim Kiss",
        "url": "lilim-kiss-new",
        "created_date": "2012-02-29T03:47:39.063000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-29T04:19:30.500000+07:00"
    },
    {
        "id": 281,
        "name": "Super Remix Best",
        "url": "super-remix-best",
        "created_date": "2012-02-29T07:41:33.673000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-29T07:42:31.250000+07:00"
    },
    {
        "id": 285,
        "name": "Gon",
        "url": "gon",
        "created_date": "2012-03-01T03:21:05.627000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-03-01T03:31:26.797000+07:00"
    },
    {
        "id": 289,
        "name": "Futagami Double",
        "url": "futagami-double",
        "created_date": "2012-03-01T05:49:34.343000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-03-01T05:49:54.890000+07:00"
    },
    {
        "id": 275,
        "name": "azusa",
        "url": "azusa",
        "created_date": "2012-02-29T00:12:37.063000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-29T00:13:08.140000+07:00"
    },
    {
        "id": 276,
        "name": "cocona",
        "url": "cocona",
        "created_date": "2012-02-29T00:27:08.970000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-29T00:27:37.923000+07:00"
    },
    {
        "id": 297,
        "name": "Magatsuhi",
        "url": "magatsuhi",
        "created_date": "2012-03-03T00:48:02.110000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-03-03T02:03:41.983000+07:00"
    },
    {
        "id": 296,
        "name": "Cherry X Cherry",
        "url": "cherry-x-cherry",
        "created_date": "2012-03-02T18:45:34.017000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-03-02T18:56:17.640000+07:00"
    },
    {
        "id": 303,
        "name": "100% Perfect Girl",
        "url": "100-perfect-girl",
        "created_date": "2012-03-04T01:10:47.627000+07:00",
        "lastupdated_date": null,
        "sort_date": "2017-12-06T01:34:31.840000+07:00"
    },
    {
        "id": 256,
        "name": "chí phèo",
        "url": "chi-pheo",
        "created_date": "2012-02-24T16:11:06.593000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-02-25T04:33:36.923000+07:00"
    },
    {
        "id": 283,
        "name": "Kanaete Aizen",
        "url": "kanaete-aizen",
        "created_date": "2012-02-29T18:26:30.737000+07:00",
        "lastupdated_date": null,
        "sort_date": "2012-03-03T05:36:12.890000+07:00"
    },
  ];

  // Callback function để cập nhật trạng thái thay đổi yêu thích
  const handleFavoritesChanged = () => {
    setFavoritesChanged(!favoritesChanged); // Đảo ngược giá trị để trigger re-render
  };

  return (
    <div className="app-container">
      <h2>Story List</h2>
      <div className='display-flex'>
      <ul className="story-list">
        {stories.map(story => (
          <li key={story.id} className="story-item">
            <span className="story-title">{story.name}</span>
            <BookmarkButton story={story} onToggleFavorite={handleFavoritesChanged} />
          </li>
        ))}
      </ul>
      <hr className="hr-divider" />
      <FavoriteList onFavoriteRemoved={handleFavoriteRemoved} key={favoritesChanged.toString()} />
      </div>
    </div>
  );
};

export default App;
