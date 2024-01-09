from tedfulk_kb_pycrawler import scrape_it, Config

# import asyncio

config = Config(
    urls=[
        "https://jxnl.github.io/instructor/",
        "https://turso.tech/",
    ],
    output_file_name=["instructor", "turso"],  # default is "output"
    max_pages_to_crawl=2,  # default is 10
)

scrape_it(config)
