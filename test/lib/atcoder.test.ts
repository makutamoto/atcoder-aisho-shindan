import axios from 'axios'

import { getUser, User } from '../../lib/atcoder'

jest.mock('axios')

test('lib/atcoder/getUser', () => {
  const input = {
    data: `\
            <!DOCTYPE html>
            <html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            </head>
            <body>
                <div id="main-div" class="float-container">
                    <nav class="navbar navbar-inverse navbar-fixed-top">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#navbar-collapse" aria-expanded="false">
                                    <span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
                                </button>
                                <a class="navbar-brand" href="/"></a>
                            </div>
                            <div class="collapse navbar-collapse" id="navbar-collapse">
                                <ul class="nav navbar-nav">
            
                                    <li><a href="/home">Home</a></li>
                                    <li><a href="/contests/">Contest</a></li>
                                    <li><a href="/ranking">Ranking</a></li>
                                </ul>
                                <ul class="nav navbar-nav navbar-right">
                                    <li class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                                            aria-haspopup="true" aria-expanded="false">
                                            <img src='//img.atcoder.jp/assets/top/img/flag-lang/en.png'> English <span
                                                class="caret"></span>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a href="/users/Makutamoto?lang=ja"><img
                                                        src='//img.atcoder.jp/assets/top/img/flag-lang/ja.png'> 日本語</a></li>
                                            <li><a href="/users/Makutamoto?lang=en"><img
                                                        src='//img.atcoder.jp/assets/top/img/flag-lang/en.png'> English</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/register?continue=https%3A%2F%2Fatcoder.jp%2Fusers%2FMakutamoto">Sign Up</a></li>
                                    <li><a href="/login?continue=https%3A%2F%2Fatcoder.jp%2Fusers%2FMakutamoto">Sign In</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <form method="POST" name="form_logout" action="/logout?continue=https%3A%2F%2Fatcoder.jp%2Fusers%2FMakutamoto">
                        <input type="hidden" name="csrf_token" value="hUiUNVozE3f4zI5dA7XeG6EFMkjXiufArcdWBN6nWBc=" />
                    </form>
                    <div id="main-container" class="container" style="">
                        <div class="row">
                            <div class="col-sm-12">
                                <ul id="user-nav-tabs" class="nav nav-tabs">
                                    <li class="active"><a href="/users/Makutamoto"><span class="glyphicon glyphicon-user"
                                                aria-hidden="true"></span> Profile</a></li>
                                    <li><a href="/users/Makutamoto/history"><span class="glyphicon glyphicon-list"
                                                aria-hidden="true"></span> Competition History</a></li>
                                </ul>
                            </div>
                            <div class="col-md-3 col-sm-12">
                                <h3>
                                    <b>7 Kyu</b><br>
                                    <img src="//img.atcoder.jp/assets/flag32/JP.png"> <a href="/users/Makutamoto"
                                        class="username"><span class="user-brown">Makutamoto</span></a> <img class="fav-btn"
                                        src="//img.atcoder.jp/assets/icon/unfav.png" width="16px" data-name="Makutamoto">
                                </h3>
                                <img class='avatar' src='https://img.atcoder.jp/icons/d8034bf137577f59350bbedda1d698f2.png'
                                    width='128' height='128'>
            
                                <table class="dl-table">
                                    <tr>
                                        <th class="no-break">Country/Region</th>
                                        <td><img src="//img.atcoder.jp/assets/flag/JP.png"> Japan</td>
                                    </tr>
                                    <tr>
                                        <th class="no-break">Birth Year</th>
                                        <td>2002</td>
                                    </tr>
                                    <tr>
                                        <th class="no-break">Twitter ID</th>
                                        <td><a href='//twitter.com/makutamoto' target="_blank">@makutamoto</a></td>
                                    </tr>
                                    <tr>
                                        <th class="no-break">TopCoder ID</th>
                                        <td><a href='//www.topcoder.com/members/Makutamoto/' target="_blank"
                                                id="topcoder_id">Makutamoto</a></td>
                                    </tr>
                                    <tr>
                                        <th class="no-break">Codeforces ID</th>
                                        <td><a href='//codeforces.com/profile/Makutamoto' target="_blank"
                                                id="codeforces_id">Makutamoto</a></td>
                                    </tr>
                                    <tr>
                                        <th class="no-break">Affiliation</th>
                                        <td class="break-all">ITMO University</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="col-md-9 col-sm-12">
                                <h3>Contest Status</h3>
                                <hr>
                                <table class="dl-table">
                                    <tr>
                                        <th class="no-break">Rank</th>
                                        <td>12747th</td>
                                    </tr>
                                    <tr>
                                        <th class="no-break">Rating</th>
                                        <td><span class='user-brown'>747</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="no-break">Highest Rating</th>
                                        <td>
                                            <span class='user-brown'>747</span>
                                            <span class="gray">―</span>
                                            <span class="bold">7 Kyu</span>
                                            <span class="gray">(&#43;53 to promote)</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="no-break">Rated Matches <span class='glyphicon glyphicon-question-sign'
                                                aria-hidden='true' data-html='true' data-toggle='tooltip'
                                                title="Counts only rated contests"></span></th>
                                        <td>22</td>
                                    </tr>
                                    <tr>
                                        <th class="no-break">Last Competed</th>
                                        <td>2020/07/05</td>
                                    </tr>
                                </table>
                                <div class="mt-2 mb-2">
                                    <script src="//code.createjs.com/easeljs-0.8.2.min.js"></script>
                                    <link href='//fonts.googleapis.com/css?family=Squada+One' rel='stylesheet' type='text/css'>
                                    <canvas id="ratingStatus" width="640" height="80"></canvas><br>
                                    <canvas id="ratingGraph" width="640" height="360"></canvas>
                                    <a id="rating-graph-expand" class="btn btn-link btn-xs visible-lg-inline"><span
                                            class="glyphicon glyphicon-resize-full" aria-hidden="true"></span></a><br>
                                </div>
                                <p class="btn-text-group">
                                    <a href='/users/Makutamoto/history' class="btn-text">Competition History</a>
            
                                    <span class="divider"></span>
                                    <a href='/users/Makutamoto/history/share/abc173' class="btn-text">Last Contest Result</a>
                                </p>
                            </div>
                        </div>
                        <hr>
                        <div class="a2a_kit a2a_kit_size_20 a2a_default_style pull-right"
                            data-a2a-url="https://atcoder.jp/users/Makutamoto?lang=en" data-a2a-title="Makutamoto - AtCoder">
                            <a class="a2a_button_facebook"></a>
                            <a class="a2a_button_twitter"></a>
                            <a class="a2a_button_telegram"></a>
                            <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
                        </div>
                        <script async src="//static.addtoany.com/menu/page.js"></script>
                    </div>
                    <hr>
                </div>
                <div class="container" style="margin-bottom: 80px;">
                    <footer class="footer">
                        <ul>
                            <li><a href="/tos">Terms of service</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/personal">Information Protection Policy</a></li>
                            <li><a href="/company">Company</a></li>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                        <div class="text-center">
                            <small id="copyright">Copyright Since 2012 &copy;<a href="http://atcoder.co.jp">AtCoder Inc.</a> All
                                rights reserved.</small>
                        </div>
                    </footer>
                </div>
                <p id="fixed-server-timer"></p>
                <div id="scroll-page-top" style="display:none;"><span class="glyphicon glyphicon-arrow-up"
                        aria-hidden="true"></span> Page Top</div>
            </body>
            </html>
        `,
  }
  const expected: User = {
    name: 'Makutamoto',
    rating: 747,
    avatar: 'https://img.atcoder.jp/icons/d8034bf137577f59350bbedda1d698f2.png',
  }
  axios.get.mockResolvedValue(input)
  return getUser('Makutamoto').then((data) => {
    expect(data).toEqual(expected)
  })
})
