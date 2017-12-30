# iota-nelson-node with docker-compose

This repository contains the docker-compose file to get started with an iota node enhanced through Nelson.cli, Nelson.gui and Nelson.mon

## Getting Started

These instructions will get you a copy of iri - the iota node with nelson up and running on your local machine using docker and docker-compose.

### Prerequisites

It is expected that you have already installed docker, docker-compose and know how to start and use it.
Knowledge about your operating system (Windows, Linux, MacOS).

## Usage

### Clone the repository
```
git clone https://github.com/ioiobzit/iota-nelson-node.git
```

#### Change the Nelson config.ini

Edit the nelson/config.ini file to match your needs, for example the name
```
[nelson]
name = CHANGE ME!
```

to
```
[nelson]
name = My awesome node
```

### Start the node

Enter the iota-nelson-node folder
```
cd iota-nelson-node
```

Run it with:
```
docker-compose up -d
```
### Check the logs

Check the IRI logs with
```
docker logs iota
```

Check the Nelson logs with
```
docker logs nelson.cli
```

### Open Nelson GUI

Open your browser to
```
http://DockerHostIP:5000/DockerHostIP/18600
```

### Open Nelson Monitor

Open your browser to
```
http://DockerHostIP:3000
```

### Update when a new release of IRI or Nelson is published

Go to your iota-nelson-node folder and update the docker images
```
cd iota-nelson-node
docker-compose pull
```

Run it with:
```
docker-compose up -d
```

## IRI Nodes information

The iota.ini contains three swarm nodes, this nodes will add you back automatically.

If you have other trusted nodes (e.g. you connected through [slack](https://iotatangle.slack.com) or other trusted sources) be sure to adapt your iota/iota.ini and nelson/config.ini accordingly.
**Be aware that the ideal and maximum number of nodes so far is 7, no more, no less.**

e.g. Your node is connected to **4** trusted IRI/IOTA nodes. The **NEIGHBORS** option in iota.ini will looke something like this:
```
NEIGHBORS =  udp://host1:41041 tcp://host2:15600 udp://host3:14600 tcp://host4:15600
```

Then be sure to adapt the **outgoingMax** ooption in nelson/config.ini to **3** to get a maximum of **7** nodes
```
outgoingMax = 3
```

As soon as the IRI/IOTA node is fully syncrhonized, please remove the swarm nodes (udp://88.99.249.250:41041 udp://94.156.128.15:14600 udp://185.181.8.149:14600) from your iota/iota.ini and without stopping your node with curl:
```
curl http://DockerHostIP:14265 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-IOTA-API-Version: 1' \
  -d '{"command": "removeNeighbors", "uris": ["udp://88.99.249.250:41041", "udp://94.156.128.15:14600", "udp://185.181.8.149:14600"]}'
```

and adapt your nelson/config.ini accordingly to your trusted iota/iota.ini config.

## Warnings

The ports setup in the docker-compose.yml file opens following container ports
- 14600/udp
- 15600/tcp
- 14265 on 0.0.0.0 (all IP adresses, internal and external)
- 18600 on 0.0.0.0 (all IP adresses, internal and external)
- 16600 on 0.0.0.0 (all IP adresses, internal and external)
- 3000  on 0.0.0.0 (all IP adresses, internal and external)
- 5000  on 0.0.0.0 (all IP adresses, internal and external)

Please assure yourself to set your firewall accordingly.

## More information

Please refer to the [IRI - IOTA Node](https://github.com/iotaledger/iri), [CarrIOTA Nelson client](https://github.com/SemkoDev/nelson.cli), [CarrIOTA Nelson GUI](https://github.com/SemkoDev/nelson.gui) or [CarrIOTA Nelson monitor](https://github.com/SemkoDev/nelson.mon) projects for more information about the configuration files and further information about the node usage.

## Author

* **Antonio Nardella** - (https://github.com/ioiobzit)

## License

This project is licensed under the ICS License - see the [LICENSE.md](LICENSE.md) file for details

## Contributing

### Donations

**Donations always welcome**:

IOTA:
```
CHQAYWPQUGQ9GANEWISFH99XBMTZAMHFFMPHWCLUZPFKJTFDFIJXFWCBISUTVGSNW9JI9QCOAHUHFUQC9SYVFXDQ9D
```

BTC:
```
1BFgqtMC2nfRxPRge5Db3gkYK7kDwWRF79
```
