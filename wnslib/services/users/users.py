# -*- coding: utf-8 -*-
# ===============================================================================
#
# Authors: Massimiliano Cannata, Milan Antonovic
#
# Copyright (c) 2015 IST-SUPSI (www.supsi.ch/ist)
#
# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 2 of the License, or (at your option)
# any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
#
# ===============================================================================
from wnslib.operation import wnsOperation
from walib import databaseManager


class wnsUsers(wnsOperation):
    """ Class to manage user
    """

    def __init__(self, wnsEnviron):
        wnsOperation.__init__(self, wnsEnviron)
        self.userid = None
        if len(wnsEnviron['pathinfo']) > 2:
            self.userid = wnsEnviron['pathinfo'][2]
        self.setData("")

    def executeGet(self):
        """ GET users

        require user information

        return a list with all user
        """
        servicedb = databaseManager.PgDB(
            self.serviceconf.connectionWns['user'],
            self.serviceconf.connectionWns['password'],
            self.serviceconf.connectionWns['dbname'],
            self.serviceconf.connectionWns['host'],
            self.serviceconf.connectionWns['port'])

        if self.userid:
            sql = "SELECT * FROM wns.user WHERE id=%s;"
            params = (self.userid,)
        else:
            sql = "SELECT * FROM wns.user;"
            params = None
        UsersList = servicedb.select(sql, params)

        users = []
        for user in UsersList:
            users.append(dict(user))

        self.setMessage("found [" + str(len(users)) + "] users")
        self.setData(users)

    def executePost(self):
        """ POST users

            create a new user

        Examples:

            {
                "username" : "username",
                "name": "",
                "surname": "",
                "email": "",
                "twitter": "",
                "tel":"",
                "fax":"",
                "address":"",
                "zip":"",
                "city":"",
                "state":"",
                "country":""
            }
        """

        servicedb = databaseManager.PgDB(
            self.serviceconf.connectionWns['user'],
            self.serviceconf.connectionWns['password'],
            self.serviceconf.connectionWns['dbname'],
            self.serviceconf.connectionWns['host'],
            self.serviceconf.connectionWns['port'])

        json_data = self.json
        username = json_data["username"]
        email = json_data["email"]
        name = json_data['name']
        surname = json_data['surname']
        # optional value
        tel = json_data.get("tel", None)
        fax = json_data.get("fax", None)
        address = json_data.get("address", None)
        zip_code = json_data.get("zip", None)
        city = json_data.get("city", None)
        state = json_data.get("state", None)
        country = json_data.get("country", None)
        twitter = json_data.get("twitter", None)

        sql = "INSERT INTO wns.user(username,name,surname,email,twitter, "
        sql += "tel, fax, address, zip, city, state, country)"
        sql += " VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s) RETURNING id;"
        params = (username, name, surname, email, twitter, tel, fax, address, )
        params += (zip_code, city, state, country)
        user_id = servicedb.execute(sql, params)[0][0]

        self.setMessage("New user: " + str(user_id))

    def executePut(self):
        """ PUT user

        Update a existing user
        """

        if not self.userid:
            self.setException("No user id defined")
            return

        servicedb = databaseManager.PgDB(
            self.serviceconf.connectionWns['user'],
            self.serviceconf.connectionWns['password'],
            self.serviceconf.connectionWns['dbname'],
            self.serviceconf.connectionWns['host'],
            self.serviceconf.connectionWns['port'])

        json_data = self.json

        sql = "UPDATE wns.user SET "
        params = ()

        for key in json_data.keys():
            sql += " " + key + "=%s,"
            params += (json_data[key],)

        sql = sql[:-1]

        sql += " WHERE id=%s;"
        params += (self.userid,)

        servicedb.execute(sql, params)

        self.setMessage("Updated user info")

    def executeDelete(self):
        """DELETE user

        delete a users, it automatically unsubscribe from notification
        """
        servicedb = databaseManager.PgDB(
            self.serviceconf.connectionWns['user'],
            self.serviceconf.connectionWns['password'],
            self.serviceconf.connectionWns['dbname'],
            self.serviceconf.connectionWns['host'],
            self.serviceconf.connectionWns['port'])

        if self.userid:
            sql = "DELETE FROM wns.user WHERE id=%s;"
            par = [self.userid]
            servicedb.execute(sql, par)
            self.setMessage('OK')
        else:
            self.setException("Please define a user id!!!")
